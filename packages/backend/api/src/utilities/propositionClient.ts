export const generatePropositionProof = async (propositionId: string) => {
  const url = `${process.env.PROPOSITION_SERVICE_URL}/proofs/${propositionId}`;
  const response = await fetch(url);
  const proof = await response.json();

  return proof;
};
