import { useParams } from "@tanstack/react-router";
import useTeamMembers from "../../hooks/useTeamMembers";
import Button from "../form/button";
import { TeamMember } from "../../types/TeamMember";
import useDeleteTeamMember from "../../hooks/useDeleteTeamMember";
import useUpdateTeamMember from "../../hooks/useUpdateTeamMember";

const MemberButtons = ({ team_id, member }: { team_id: string, member: TeamMember }) => {
  const deleteTeamMember = useDeleteTeamMember(team_id);
  const updateTeamMember = useUpdateTeamMember(team_id);

  if (member.isUser)
    return null;

  return (
    <div className="flex space-x-2 mt-2 w-auto justify-end">
      {member.isAdmin ? (
        <Button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          onClick={() => updateTeamMember.mutate({ member_id: member.id, is_admin: false })}
        >
          Demote
        </Button>
      ) : (
        <Button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => updateTeamMember.mutate({ member_id: member.id, is_admin: true })}
        >
          Promote
        </Button>
      )}
      <Button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={() => deleteTeamMember.mutate(member.id)}
      >
        Kick
      </Button>
    </div>
  );
}

const MembersList = () => {
  const team_id = useParams({
    from: "/teams/$team_id/admin",
    select: ({ team_id }) => team_id,
  });

  const { data: members, isLoading, isError } = useTeamMembers(team_id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading members</p>;
  }

  if (!members || members.length === 0) {
    return <p>No members was found</p>;
  }

  return (
    <ul className="flex flex-col space-y-4">
      {members.map((member) => (
        <li
          key={member.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col"
        >
          <div className="flex ">
            <div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p>{member.email}</p>
            </div>
            {member.isAdmin && (
              <span className="text-sm text-green-600 font-semibold ml-auto">
                Admin
              </span>
            )}
          </div>
          <MemberButtons team_id={team_id} member={member} />
        </li>
      ))}
    </ul>
  );
};

export default MembersList;