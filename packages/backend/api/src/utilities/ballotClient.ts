import { ValidationResponse } from "../types/ValidationResponse";

export const generateBallotProof = async (ballotId: string) => {
  const url = `${process.env.BALLOT_SERVICE_URL}/proofs/${ballotId}`;
  const response = await fetch(url);
  const proof = await response.json();

  return proof;
};

export const validateBallotProofsForElection = async (electionId: string): Promise<ValidationResponse> => {
  const url = `${process.env.BALLOT_SERVICE_URL}/proofs/validate/${electionId}`;
  const response = await fetch(url);
  const result = await response.json();

  return result as ValidationResponse;
}