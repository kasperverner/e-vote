export const generateBallotProof = async (ballotId: string) => {
  const url = `${process.env.BALLOT_SERVICE_URL}/proofs/${ballotId}`;
  const response = await fetch(url);
  const proof = await response.json();

  return proof;
};
