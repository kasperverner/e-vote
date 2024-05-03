import { z, ZodType } from "zod";
import useCastVote from "../../hooks/useCastVote";
import { Election } from "../../types/Election";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../form/button";
import { useState } from "react";

type FormValues = {
  proposition_id: string;
};

const FormSchema: ZodType<FormValues> = z.object({
  proposition_id: z.string().min(1),
});

const CastVoteForm = ({ election }: { election: Election }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const castVote = useCastVote(election.team_id, election.id);
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const { proposition_id } = useWatch<FormValues>({ control });

  const onSubmit = handleSubmit(() => setShowModal(true));

  const cancelSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const confimedSubmit = handleSubmit(() => {
    if (proposition_id)
      castVote.mutate(proposition_id);

    setShowModal(false);
  });

  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-3xl font-bold mb-4">Cast vote</h1>
      <p className="mb-4">Choose a proposition to vote on:</p>
      {election.propositions?.map((proposition) => (
        <label
          key={proposition.id}
          className="block px-4 py-2 bg-gray-100 has-[:checked]:bg-blue-300 mb-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            {...register("proposition_id")}
            value={proposition.id}
            className="hidden"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{proposition.name}</span>
            <small className="font-light">{proposition.description}</small>
          </div>
        </label>
      ))}
      <Button
        type="submit"
        className="mt-4 disabled:bg-blue-900"
        disabled={!isValid || castVote.isPending}
      >
        Vote
      </Button>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={cancelSubmit}
        >
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg mb-2">You have selected to vote for:</p>
            <p className="font-semibold text-lg mb-4">
              {election.propositions?.find(
                (proposition) => proposition.id == proposition_id
              )?.name ?? ""}
            </p>
            <p className="text-xs mb-4">
              This vote is final and cannot be changed.
            </p>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowModal(false)}
                className="bg-red-500 w-1/2"
              >
                Close
              </Button>
              <Button onClick={confimedSubmit} className="bg-blue-500 w-1/2">
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default CastVoteForm;
