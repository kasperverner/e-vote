import { Election } from "../../types/Election"

const ElectionResults = ({ election }: { election: Election }) => {
  const currentDate = new Date();

  if (currentDate < new Date(election.start_at))
    return <p>Election has not started yet</p>

  if (currentDate < new Date(election.end_at))
    return <p>You have already voted. Come back later to see results.</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Election results</h1>
      <p>Coming soon...</p>
    </>
  );
}

export default ElectionResults
