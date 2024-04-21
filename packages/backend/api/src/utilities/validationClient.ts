export const generateValidationProof = async (ballotProof: string, propositionProof: string) => {
  const url = `${process.env.VALIDATION_SERVICE_URL}/proofs/${ballotProof}/${propositionProof}`;
  const response = await fetch(url);
  const proof = await response.json();
  
  return proof;
};
