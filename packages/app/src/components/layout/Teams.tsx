import Container from "./Container";
import useTeams from "../../hooks/useTeams";
import { useAuth } from "@clerk/clerk-react";

const Teams = () => {
    const { data, error } = useTeams();
    const { isSignedIn, sessionId, userId } = useAuth();

    return (
        <div>
            {data?.map((team) => (
                <div key={team.id}>
                    <h2>{team.name}</h2>
                    <p>{team.description}</p>
                </div>
            ))}
        </div>
    )
};

export default Teams;