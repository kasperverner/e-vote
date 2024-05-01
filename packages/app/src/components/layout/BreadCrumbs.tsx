import { Link, useRouterState } from "@tanstack/react-router";
import useTeam from "../../hooks/useTeam";
import useElection from "../../hooks/useElection";
import { get } from "react-hook-form";

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

const GenerateLabel = (part: string, teamId: string, electionId: string) => {
  if (part === teamId) return GetTeamName(teamId);
  if (part === electionId) return GetElectionName(teamId, electionId);

  return part;
};

const GetTeamName = (teamId: string) => {
  const { data: team } = useTeam(teamId);
  return team?.name ?? "loading...";
}

const GetElectionName = (teamId: string, electionId: string) => {
  const { data: election } = useElection(teamId, electionId);
  return election?.name ?? "loading...";
}

const BuildBreadCrumbs = ({
  parts,
  teamId,
  electionId,
}: {
  parts: string[];
  teamId: string;
  electionId: string;
}) => {
  return (
    <>
      {["home", ...parts].map((part, index) => (
        <div key={index}>
          {index < parts.length ? (
            <>
              <BuildBreadCumbLink
                label={GenerateLabel(part, teamId, electionId)}
                route={index === 0 ? "/" : parts.slice(0, index).join("/")}
              />
              <span className="text-sm mx-2">/</span>
            </>
          ) : (
            <BuildBreadCrumsLabel
              label={GenerateLabel(part, teamId, electionId)}
            />
          )}
        </div>
      ))}
    </>
  );
};

const BreadCrumbs = () => {
  const routerState = useRouterState();
  const match = routerState.matches.find(
    (match) =>
      match.pathname.toLowerCase() ==
      routerState.resolvedLocation.pathname.toLowerCase()
  );

  const path = match?.pathname || "";
  const parts = path.split("/").filter((part) => part !== "");

  const { team_id, election_id } = match?.params || {};

  return (
    <div className="flex flex-row mt-2 mb-4">
      <BuildBreadCrumbs
        parts={parts}
        teamId={team_id}
        electionId={election_id}
      />
    </div>
  );
};

export default BreadCrumbs;
