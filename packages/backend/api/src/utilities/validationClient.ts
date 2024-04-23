import { ValidationResponse } from "../types/ValidationResponse";

export const generateValidationProof = async (ballotProof: string, propositionProof: string) => {
  const url = `${process.env.VALIDATION_SERVICE_URL}/proofs/${ballotProof}/${propositionProof}`;
  const response = await fetch(url);
  const proof = await response.json();

  return proof;
};

export const validateValidationProofsForElection = async (electionId: string): Promise<ValidationResponse> => {
  const url = `${process.env.VALIDATION_SERVICE_URL}/proofs/validate/${electionId}`;
  const response = await fetch(url);
  const result = await response.json();

  return result as ValidationResponse;
};