/* eslint-disable react-hooks/rules-of-hooks */
import { createFileRoute } from "@tanstack/react-router";
import useCreateTeam from "@/hooks/useCreateTeam";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/form/button";

type FormValues = {
  name: string;
};

const FormSchema: ZodType<FormValues> = z.object({
  name: z.string().min(4).max(64),
});

export const Route = createFileRoute("/teams/create")({
  component: () => {
    const createTeam = useCreateTeam();

    const {
      register,
      handleSubmit,
      formState: { isValid },
      reset,
    } = useForm<FormValues>({
      resolver: zodResolver(FormSchema),
    });

    const onSubmit = handleSubmit(async (data) => {
      await createTeam.mutateAsync(data);
      reset();
    });

    return (
      <>
        <h1 className="text-3xl font-bold mb-4">Create team</h1>
        <form className="flex" onSubmit={onSubmit}>
          <input
            {...register("name")}
            className="border border-gray-300 rounded-md px-2 py-1 flex-1"
            placeholder="Enter Team Name"
          />
          <Button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            type="submit"
            disabled={!isValid || createTeam.isPending}
          >
            Create Team
          </Button>
        </form>
      </>
    );
  },
});
