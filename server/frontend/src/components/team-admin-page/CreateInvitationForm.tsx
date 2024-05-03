import { useParams } from "@tanstack/react-router";
import Button from "../form/button";
import useCreateInvitation from "../../hooks/useCreateInvitation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

type FormValues = {
  email: string;
  isAdmin?: boolean;
};

const FormSchema: ZodType<FormValues> = z.object({
  email: z.string().email(),
  isAdmin: z.boolean().optional(),
});

const CreateInvitationForm = () => {
  const team_id = useParams({
    from: "/teams/$team_id/admin",
    select: ({ team_id }) => team_id,
  });
  const createInvitation = useCreateInvitation(team_id);
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema), // Apply the zodResolver
  });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    await createInvitation.mutateAsync(data);
    reset();
  });

  return (
    <form className="flex flex-row mb-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <input
          placeholder="Enter email"
          {...register("email")}
          className="border border-gray-300 rounded-md px-2 py-1"
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            {...register("isAdmin")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="isAdmin"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Invite as admin
          </label>
        </div>
      </div>
      <div>
        <Button
          className="ml-2 bg-green-500 disabled:bg-green-800 text-white px-4 py-2 rounded-md"
          type="submit"
          disabled={createInvitation.isPending || !isValid}
        >
          Invite
        </Button>
      </div>
    </form>
  );
};

export default CreateInvitationForm;
