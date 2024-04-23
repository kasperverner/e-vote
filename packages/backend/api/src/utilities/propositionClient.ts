import { ElectionResultsResponse } from "../types/ElectionResultsResponse";
import { ValidationResponse } from "../types/ValidationResponse";

export const generatePropositionProof = async (propositionId: string) => {
  const url = `${process.env.PROPOSITION_SERVICE_URL}/proofs/${propositionId}`;
  const response = await fetch(url);
  const proof = await response.json();

  return proof;
};

export const validatePropositionProofsForElection = async (electionId: string): Promise<ValidationResponse> => {
  const url = `${process.env.PROPOSITION_SERVICE_URL}/proofs/validate/${electionId}`;
  const response = await fetch(url);
  const result = await response.json();

  return result as ValidationResponse;
};

export const getResultForElection = async (electionId: string) : Promise<ElectionResultsResponse> => {
  const url = `${process.env.PROPOSITION_SERVICE_URL}/results/${electionId}`;
  const response = await fetch(url);
  const results = await response.json();

  return results;
}