import { useParams } from "@tanstack/react-router";
import Button from "../form/button";
import useDeleteTeam from "../../hooks/useDeleteTeam";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useRenameTeam from "../../hooks/useRenameTeam";

type FormValues = {
  name: string;
};

const FormSchema: ZodType<FormValues> = z.object({
  name: z.string(),
});

const ActionsForm = () => {
  const team_id = useParams({
    from: "/teams/$team_id/admin",
    select: ({ team_id }) => team_id,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const renameTeam = useRenameTeam(team_id);
  const deleteTeam = useDeleteTeam(team_id);

  const onSubmit = handleSubmit(async ({ name }: FormValues) => {
    await renameTeam.mutateAsync(name);
    reset();
  });

  if (errors.name) console.error(errors);

  return (
    <>
      <form className="flex" onSubmit={onSubmit}>
        <input
          placeholder="Enter new team name"
          className="border border-gray-300 rounded-md px-2 py-1"
          {...register("name")}
        />
        <Button
          className="ml-2 bg-blue-500 disabled:bg-blue-800 text-white px-4 py-2 rounded-md"
          type="submit"
          disabled={renameTeam.isPending || !isValid}
        >
          Rename team
        </Button>
      </form>
      <Button
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={deleteTeam.mutate}
      >
        Delete Team
      </Button>
    </>
  );
};

export default ActionsForm;
