/* eslint-disable react-hooks/rules-of-hooks */
import { createFileRoute, useParams } from "@tanstack/react-router";
import useCreateElection, { ElectionRequest } from "@/hooks/useCreateElection";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

const ElectionSchema: ZodType<ElectionRequest> = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  start_at: z.string().min(1),
  end_at: z.string().min(1),
  propositions: z
    .array(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
      })
    )
    .min(2),
});

export const Route = createFileRoute("/teams/$team_id/elections/create")(
  {
    component: () => {
      const team_id = useParams({
        from: "/teams/$team_id/elections/create",
        select: ({ team_id }) => team_id,
      });

      const createElection = useCreateElection(team_id);

      const {
        register,
        handleSubmit,
        control,
        formState: { isValid },
      } = useForm<ElectionRequest>({
        defaultValues: {
          name: undefined,
          description: undefined,
          start_at: undefined,
          end_at: undefined,
          propositions: [
            { name: undefined, description: undefined },
            { name: undefined, description: undefined },
          ],
        },
        resolver: zodResolver(ElectionSchema),
      });

      const { fields, append, remove } = useFieldArray({
        control,
        name: "propositions",
      });

      const onSubmit = handleSubmit(async (data: ElectionRequest) => {
        await createElection.mutateAsync(data);
      });

      return (
        <>
          <h1 className="text-3xl font-bold mb-4">Create election</h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Election Name"
              className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <textarea
              rows={4}
              {...register("description")}
              placeholder="Election Description"
              className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <input
              type="datetime-local"
              {...register("start_at")}
              placeholder="Start At"
              className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <input
              type="datetime-local"
              {...register("end_at")}
              placeholder="End At"
              className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {fields.map((field, index) => (
              <div key={field.id} className="flex flex-col gap-2">
                <input
                  {...register(`propositions.${index}.name`)}
                  placeholder="Proposition Name"
                  className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
                <input
                  {...register(`propositions.${index}.description`)}
                  placeholder="Proposition Description"
                  className="block w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex place-content-between">
              <button
                type="button"
                onClick={() => append({ name: "", description: "" })}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Proposition
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 disabled:bg-green-800 text-white font-bold py-2 px-4 rounded"
                disabled={!isValid || createElection.isPending}
              >
                Create Election
              </button>
            </div>
          </form>
        </>
      );
    },
  }
);
