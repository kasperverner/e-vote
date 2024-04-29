import { useNavigate, createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import { useAuth } from "@clerk/clerk-react";
import useElections from "../../hooks/useElections";
import useTeamMembers from "../../hooks/useTeamMembers";
import useCurrentUser from "../../hooks/useCurrentUser";
import useInvitations from "../../hooks/useInvitations";

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
    const { data: elections } = useElections(team_slug);
    const { data: members } = useTeamMembers(team_slug);
    const { data: currentUser } = useCurrentUser();
    const { data: invitations } = useInvitations(team_slug);
    const navigate = useNavigate();

    // if something is loading, return a loading state
    if (!elections || !members || !currentUser || !invitations) {
        return <div>Loading...</div>;
    }

    async function handleDeleteTeam() {
        const token = await getToken();
        // fetch delete request to delete team (DELETE on /teams/:teamId)
        fetch(`http://localhost:4000/teams/${team_slug}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token as string}`,
            },
        })
            .then((data) => {
                console.log(data);
                // redirect to team index
                navigate({ to: "/teams" });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error deleting team");
            });
    }

    async function handleRenameTeam(newName: string, team_slug: string) {
        const token = await getToken();
        // fetch request to rename team (PUT on /teams/:teamId)
        fetch(`http://localhost:4000/teams/${team_slug}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token as string}`,
            },
            body: JSON.stringify({
                name: newName,
            })
        })
            .then((data) => {
                if (data.status === 500) {
                    alert("Error renaming team, try another name");
                }
                return data;
            })
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

    async function handleChangeUser(user_id: string, isAdmin: boolean) {
        // fetch put on /teams/:teamId/members/:memberId, add isAdmin: true
        const token = await getToken();
        fetch(`http://localhost:4000/teams/${team_slug}/members/${user_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token as string}`,
            },
            body: JSON.stringify({
                isAdmin: isAdmin,
            }),
        })
            .then((data) => {
                console.log(data);
                // reload page
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error promoting user to admin");
            });
    }

    async function handleRemoveUser(user_id: string) {
        // fetch delete request to remove user from team (DELETE on /teams/:teamId/members/:memberId)
        const token = await getToken();
        fetch(`http://localhost:4000/teams/${team_slug}/members/${user_id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token as string}`,
            },
        })
            .then((data) => {
                console.log(data);
                // reload page
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error removing user from team");
            });
    }

    async function handleInviteUser(email: string) {
        // fetch post request to invite user to team (POST on /teams/:teamId/members/invitations)
        const token = await getToken();
        fetch(`http://localhost:4000/teams/${team_slug}/members/invitations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token as string}`,
            },
            body: JSON.stringify({
                email: email,
                isAdmin: false,
            }),
        })
            .then((data) => {
                console.log(data);
                // reload page
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error inviting user to team");
            });
    }

    async function handleRevokeInvitation(invitation_id: string) {
        // fetch delete request to revoke invitation (DELETE on /teams/:teamId/members/invitations/:invitationId)
        const token = await getToken();
        fetch(`http://localhost:4000/teams/${team_slug}/members/invitations/${invitation_id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token as string}`,
            },
        })
            .then((data) => {
                console.log(data);
                // reload page
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error revoking invitation");
            });
    }

    const copyLink = (path: string) => {
        const fullPath = document.location.origin + path;

        navigator.clipboard.writeText(fullPath)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy link: ', err);
            });
    };

    return (
        <div className="flex flex-row" style={{ height: "80vh" }}>
            <div className="flex flex-col w-1/2">
                <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-2/5 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-4">Members</h2>
                    <ul className="flex flex-col space-y-4">
                        {members.map((member) => (
                            <li key={member.email} className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <h3 className="text-lg font-bold">{member.name}</h3>
                                        <p>{member.email}</p>
                                    </div>
                                    {member.isAdmin && (
                                        <span className="text-sm text-green-600 font-semibold ml-4">Admin</span>
                                    )}
                                </div>
                                {currentUser.user.email !== member.email && (
                                    <div className="flex space-x-2">
                                        {!member.isAdmin ? (
                                            <Button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => handleChangeUser(member.id, true)}>Promote</Button>
                                        ) : (
                                            <Button className="bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={() => handleChangeUser(member.id, false)}>Demote</Button>
                                        )}
                                        <Button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => handleRemoveUser(member.id)}>Kick</Button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-2/5 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-4">Invites</h2>
                    <div>
                        <div className="flex mb-4">
                            <input type="email" placeholder="Enter email" id="inviteEmail" className="border border-gray-300 rounded-md px-2 py-1" />
                            <Button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => handleInviteUser(document.getElementById('inviteEmail').value)}>Invite</Button>
                        </div>
                    </div>
                    <ul className="flex flex-col space-y-4 h-full ml-4">
                        {[...invitations.filter(inv => inv.state === 'PENDING'),
                        ...invitations.filter(inv => inv.state === 'ACCEPTED'),
                        ...invitations.filter(inv => inv.state === 'DECLINED')].map((invitation, index) => (
                            <li key={invitation.email + index} className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg">{invitation.email}</h3>
                                    <p>Invited by: {invitation.invited_by_member.user.name}</p> {/* Added line */}
                                </div>
                                {invitation.state === 'PENDING' && (
                                    <div>
                                        <Button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => copyLink(`/teams/${team_slug}/members/invite/${invitation.id}`)}>Copy link</Button>
                                        <Button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => handleRevokeInvitation(invitation.id)}>Revoke</Button>
                                    </div>
                                )}
                                {invitation.state === 'DECLINED' && (
                                    <span className="text-red-500">Declined</span>
                                )}
                                {invitation.state === 'ACCEPTED' && (
                                    <span className="text-green-500">Accepted</span>
                                )}
                            </li>
                        ))}
                    </ul>
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
                <div className="bg-white p-4 rounded-lg shadow-md h-full ml-4 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-4">Elections</h2>
                    <ul className="flex flex-col space-y-4">
                        {elections.map((election) => (
                            <li key={election.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold">{election.name}</h3>
                                <p>{election.description}</p>
                                <Link to={`/teams/${team_slug}/elections/${election.id}`} className="text-blue-500">View election</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TeamAdminPanelRoute;