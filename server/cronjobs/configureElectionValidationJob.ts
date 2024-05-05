import { PrismaClient } from "@prisma/client";
import { CronJob } from "cron";
import ballotClient from "../../services/ballot-service/client";
import propositionClient from "../../services/proposition-service/client";
import validationClient from "../../services/validation-service/client";

let isJobRunning = false;
const db = new PrismaClient();

/**
 * Configure the election validation job
 * The cron job will run every second to check for elections that have ended and have not been validated
 * If an election is found, the job will validate the votes, propositions, and ballots for the election
 * The validation results will be saved to the database with a proof hash to verify the validation
 *
 * The variable `isJobRunning` is used to prevent multiple instances of the job from running simultaneously
 */
export default function configureElectionValidationJob() {
  new CronJob(
    '0 * * * * *', // cronTime
    async function () {
      // Skip current run if job is already running
      if (isJobRunning)
          return;

      // Set job as running
      isJobRunning = true;

      // Find all elections that have ended and have not been validated
      const elections = await db.elections.findMany({
        where: {
          validation_id: null,
          is_deleted: false,
          end_at: {
            lte: new Date(),
          },
        },
      });

      // Validate each election
      for (const election of elections) {
        // validate the votes for the election
        const validationRequest = await validationClient.api.proofs.election[
          ":election_id"
        ].$get({
          param: {
            election_id: election.id,
          },
        });

        // validate the propositions for the election
        const propositionRequest = await propositionClient.api.proofs.election[
          ":election_id"
        ].$get({
          param: {
            election_id: election.id,
          },
        });

        // validate the ballots for the election
        const ballotRequest = await ballotClient.api.proofs.election[
          ":election_id"
        ].$get({
          param: {
            election_id: election.id,
          },
        });

        const proofRequest = await ballotClient.api.proofs[":value"].$get({
          param: {
            value: election.id + validationRequest.ok + propositionRequest.ok + ballotRequest.ok,
          },
        });

        const { hash: proofHash } = await proofRequest.json();

        // save the validation results
        const electionValidation = await db.electionValidation.create({
          data: {
            election_id: election.id,
            is_votes_valid: validationRequest.ok,
            is_propositions_valid: propositionRequest.ok,
            is_ballots_valid: ballotRequest.ok,
            proof: proofHash,
          },
        });

        // update the election with the validation id
        await db.elections.update({
          where: {
            id: election.id,
          },
          data: {
            validation_id: electionValidation.id,
          },
        });
      }

      // Set job as not running
      isJobRunning = false;
    }, // onTick
    null, // onComplete
    true, // start
    'utc'
  );
}