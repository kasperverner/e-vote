import { Team } from "../../types/Team";

const Info = ({ team } : { team: Team }) => {
    return (
        <div className="flex flex-col space-y-4">
            {team ? (
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{team.name}</h1>
                    <p className="text-xl text-gray-600">Total Members: {team.member_count}</p>
                    <p className="text-l text-gray-600">Created At: {new Date(team.created_at).toLocaleDateString()}</p>
                </div>
            ) : (
                <p className="text-xl text-gray-600">Loading...</p>
            )}
        </div>
    )
}

export default Info;