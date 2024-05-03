import { Election } from "../../types/Election"

const ElectionResults = ({ election }: { election: Election }) => {
  if (new Date() < new Date(election.start_at))
    return <p>Election has not started yet</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Election results</h1>
      <p>Coming soon...</p>
    </>
  );
}

export default ElectionResults
