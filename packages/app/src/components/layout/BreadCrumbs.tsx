import { Link } from "@tanstack/react-router";

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

const BuildBreadCrumbs = ({ parts }: { parts: string[] }) => {
  return (
    <>
      {["home", ...parts].map((part, index) => (
          <div key={index}>
            {index < parts.length ? (
              <>
                <BuildBreadCumbLink
                  label={part}
                  route={index === 0 ? "/" : parts.slice(0, index).join("/")}
                />
                <span className="text-sm mx-2">/</span>
              </>
            ) : (
              <BuildBreadCrumsLabel label={part} />
            )}
          </div>
        )
      )}
    </>
  );
};

const BreadCrumbs = () => {
  const path = document.location.pathname;
  const parts = path
    .split("/")
    .filter((part) => part !== "");

  return (
    <div className="flex flex-row mt-2 mb-4">
      <BuildBreadCrumbs parts={parts} />
    </div>
  );
};

export default BreadCrumbs;
