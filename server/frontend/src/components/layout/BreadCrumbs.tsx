import { Link, useParams, useRouterState } from "@tanstack/react-router";
import useTeam from "../../hooks/useTeam";
import useElection from "../../hooks/useElection";
import { Election } from '@/types/Election';
import { Team } from '@/types/Team';

const BuildBreadCumbLink = ({
  label,
  route,
}: {
  label: string;
  route: string;
}) => {
  return (
    <span className="text-sm font-semibold text-gray-800">
      <Link to={route}>{label.toUpperCase()}</Link>
    </span>
  );
};

const BuildBreadCrumsLabel = ({ label }: { label: string }) => {
  return (
    <span className="text-sm font-light text-gray-500">
      {label.toUpperCase()}
    </span>
  );
};

const TruncateLabel = (label: string, maxLength: number) => {
  if (label.length > maxLength) {
    return label.slice(0, maxLength) + "...";
  }

  return label;
}

const GenerateLabel = (part: string, teamId: string | undefined, electionId: string | undefined, team: Team | undefined, election: Election | undefined) => {
  switch (part) {
    case teamId:
      return team?.name ?? part;
    case electionId:
      return election?.name ?? part;
    default:
      return part;
  }
};

const BuildBreadCrumbs = ({
  parts,
  teamId,
  electionId,
  team,
  election
}: {
  parts: string[];
  teamId: string | undefined;
  electionId: string | undefined;
  team: Team | undefined;
  election: Election | undefined;
}) => {
  return (
    <>
      {parts.map((part, index) => (
        <div key={index}>
          {index < parts.length - 1 ? (
              <>
                {part === "elections" ? (
                  <BuildBreadCrumsLabel
                    label={GenerateLabel(part, teamId, electionId, team, election)}
                  />
                ) : (
                  <BuildBreadCumbLink
                    label={TruncateLabel(GenerateLabel(part, teamId, electionId, team, election), 16)}
                    route={`/${parts.slice(0, index + 1).join("/")}`}
                  />
                )}
                <span className="text-sm mx-2">/</span>
              </>
            ) : (
                <BuildBreadCrumsLabel
                  label={GenerateLabel(part, teamId, electionId, team, election)}
                />
              )}
            </div>
          ))}
    </>
  );
};

const BreadCrumbs = () => {
  const { team_id, election_id } = useParams({
    strict: false,
  });
  const { data: team } = useTeam(team_id);
  const { data: election } = useElection(team_id, election_id);

  const routerState = useRouterState();
  const path = routerState.resolvedLocation.pathname.toLowerCase();
  const parts = path.split("/").filter((part) => part !== "");

  return (
    <div className="flex flex-row mt-2 mb-4">
      <BuildBreadCrumbs
        parts={parts}
        teamId={team_id}
        electionId={election_id}
        team={team}
        election={election}
      />
    </div>
  );
};

export default BreadCrumbs;
