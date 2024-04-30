import { useState } from "react";
import { createRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@clerk/clerk-react";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionCreateRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections/new",
  component: TeamElectionCreatePage,
});

function TeamElectionCreatePage() {
  const { team_slug } = TeamElectionCreateRoute.useParams();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  if (!team_slug) {
    return <div>Loading...</div>;
  }

  const clientFormat = (datetime) => {
    // Ensure datetime is in the format expected by datetime-local input
    return datetime.replace("Z", "");
  };

  const serverFormat = (datetime) => {
    // Ensure datetime is in the format expected by the server
    return datetime + ":00.000Z"; // Adding seconds and milliseconds for server format
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_at_client: "",
    end_at_client: "",
    start_at_server: "",
    end_at_server: "",
    propositions: [{ name: "", description: "" }, { name: "", description: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "start_at_client" || name === "end_at_client") {
      const formattedValue = clientFormat(value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: formattedValue,
        [`${name.slice(0, -7)}_server`]: serverFormat(formattedValue),
      }));
      console.log("set it to", formattedValue);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handlePropositionChange = (index, field, value) => {
    const updatedPropositions = [...formData.propositions];
    updatedPropositions[index][field] = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      propositions: updatedPropositions,
    }));
  };

  const handleAddProposition = () => {
    setFormData({
      ...formData,
      propositions: [...formData.propositions, { name: "", description: "" }],
    });
  };

  const handleRemoveProposition = (index) => {
    const updatedPropositions = [...formData.propositions];
    updatedPropositions.splice(index, 1);
    setFormData({ ...formData, propositions: updatedPropositions });
  };

  // same as above but using then chain
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if the dates are set
    if (!formData.start_at_server || !formData.end_at_server) {
      alert("Please set the start and end dates");
      return;
    }

    // check if the start date is before the end date
    if (formData.start_at_server > formData.end_at_server) {
      alert("The start date must be before the end date");
      return;
    }

    // check if there are is at least two propositions
    if (formData.propositions.length < 2) {
      alert("Please add at least two proposition");
      return;
    }

    // check if all names and descriptions are set (both for election and propositions)
    if (
      !formData.name ||
      !formData.description ||
      formData.propositions.some(
        (proposition) => !proposition.name || !proposition.description
      )
    ) {
      alert("Please fill in all fields");
      return;
    }

    // disable the button to prevent double submission
    document.getElementById("create-election-button").disabled = true;

    const token = await getToken();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        propositions: formData.propositions,
        start_at: formData.start_at_server,
        end_at: formData.end_at_server,
      }),
    };
    fetch(import.meta.env.VITE_API_BASE_URL+`/teams/${team_slug}/elections`, requestOptions)
      .then((response) => {
        navigate({ to: `/teams/$team_slug/admin`, params: { team_slug } });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // This is not the way to do it. Make a mutation and use the useMutation isLoading state to disable the button
    // document.getElementById("create-election-button").disabled = false;
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Election Name"
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Election Description"
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <input
          type="datetime-local"
          name="start_at_client"
          value={clientFormat(formData.start_at_client)}
          onChange={handleChange}
          placeholder="Start At"
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <input
          type="datetime-local"
          name="end_at_client"
          value={clientFormat(formData.end_at_client)}
          onChange={handleChange}
          placeholder="End At"
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        {formData.propositions.map((proposition, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              name={`proposition_${index}_name`}
              value={proposition.name}
              onChange={(e) => handlePropositionChange(index, "name", e.target.value)}
              placeholder="Proposition Name"
              className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name={`proposition_${index}_description`}
              value={proposition.description}
              onChange={(e) => handlePropositionChange(index, "description", e.target.value)}
              placeholder="Proposition Description"
              className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {index > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveProposition(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddProposition}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Proposition
        </button>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          id="create-election-button"
        >
          Create Election
        </button>
      </form>
    </div>
  );
}

export default TeamElectionCreateRoute;
