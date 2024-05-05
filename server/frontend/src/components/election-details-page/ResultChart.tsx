import { Election } from "@/types/Election";
import { Result } from "@/types/Result";
import { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { DatasetType } from "node_modules/@mui/x-charts/models/seriesType/config";

const ResultChat = (
  { election, result } : { election: Election, result: Result }
) => {
  if (!result) return <p>No result found for the election...</p>;

  const data = useMemo<DatasetType | undefined>(() => {
    // Extract the data from the result object
    return Object.entries(result)
      .map(([key, value]) => {
        return {
          label: election.propositions?.find((p) => p.id === key)?.name || key,
          votes: value,
        };
      })
      .sort((a, b) => b.votes - a.votes);
  }, [result, election]);

  return (
    <div className="h-[600px]">
      <BarChart
        dataset={data}
        series={[{ dataKey: "votes", color: "#334155" }]}
        yAxis={[
          {
            scaleType: "linear",
            label: "Votes",
          },
        ]}
        xAxis={[{ scaleType: "band", dataKey: "label" }]}
        margin={{
          left: 80,
          right: 80,
          top: 40,
          bottom: 80,
        }}
      />
    </div>
  );

};

export default ResultChat;
