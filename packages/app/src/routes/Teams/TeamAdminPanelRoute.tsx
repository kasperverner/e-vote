import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import { useAuth } from "@clerk/clerk-react";

import Button from "../../components/form/button";
import { Link } from "@tanstack/react-router";

const TeamAdminPanelRoute = createRoute({
    getParentRoute: () => TeamIndexRoute,
    path: "$team_slug/admin",
    component: TeamAdminPanel,
});

function TeamAdminPanel() {
    const team_slug = TeamAdminPanelRoute.useParams().team_slug;
    const { getToken } = useAuth();

    function handleDeleteTeam() {
        console.log("Team deleted");
    }

    async function handleRenameTeam(newName: string, team_slug: string) {
        const token = await getToken();
        console.log(token);
        // fetch request to rename team (PUT on /teams/:teamId)
        fetch(`http://localhost:4000/teams/${team_slug}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token as string}`,
            },
            body: JSON.stringify({
                name: newName,
            })})
            .then((data) => {
                console.log(data);
                // reload page
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error renaming team");
            });
    }

    return (
        <div className="flex flex-row" style={{ height: "80vh" }}>
            <div className="flex flex-col w-1/2">
                <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-2/5">
                    <h2 className="text-xl font-bold mb-4">Members</h2>
                    {/* Members section content */}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-2/5">
                    <h2 className="text-xl font-bold mb-4">Invites</h2>
                    {/* Invites section content */}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md h-1/5">
                    <h2 className="text-xl font-bold mb-4">Actions</h2>
                    <div>
                        <div className="flex">
                            <input type="text" placeholder="Insert new team name" id="teamName" className="border border-gray-300 rounded-md px-2 py-1" />
                            <Button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleRenameTeam(document.getElementById('teamName').value, team_slug)}>Rename team</Button>
                        </div>
                    </div>
                    <Button className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => { handleDeleteTeam() }}>Delete Team</Button>
                </div>
            </div>
            <div className="flex flex-col w-1/2">
                <div className="bg-white p-4 rounded-lg shadow-md h-full ml-4">
                    <h2 className="text-xl font-bold mb-4">Elections</h2>
                    {/* Elections section content */}
                </div>
            </div>
        </div>
    );
}

export default TeamAdminPanelRoute;