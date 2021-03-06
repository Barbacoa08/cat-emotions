import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { GetUserHistoryResult } from "graphql";

interface GraphData {
  xAxisDataKeyDate: string;
  [key: string]: string | number;
}

interface EmotionalJourneyProps {
  data: GetUserHistoryResult[];
  dimensions: number;
}

const getRandomHexValue = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export const EmotionalJourney = ({
  data,
  dimensions,
}: EmotionalJourneyProps) => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  useEffect(() => {
    const dataset: GraphData[] = [];

    data.forEach((entry) => {
      const date = new Date(entry.datetime).toLocaleDateString();

      if (dataset[dataset.length - 1]?.xAxisDataKeyDate !== date) {
        dataset.push({
          xAxisDataKeyDate: date,
        });
      }

      const target: GraphData = dataset[dataset.length - 1];

      entry.emotions.forEach((emotion) => {
        const emotionTodo = target[emotion] || 0;

        target[emotion] = (emotionTodo as number) + 1;
      });
    });

    setGraphData(dataset);
  }, [data]);

  const bars = useMemo(() => {
    const emotions = new Set<string>();
    data.forEach((entry) => {
      entry.emotions.forEach((emotion) => {
        emotions.add(emotion);
      });
    });

    return Array.from(emotions).map((emotion) => (
      <Bar
        key={emotion}
        dataKey={emotion}
        stackId="a"
        fill={getRandomHexValue()}
      />
    ));
  }, [data]);

  const polarAngleAxisTextColor = useColorModeValue("black", "white");

  return (
    <Box as="section">
      <Heading as="h2">Emotional Journey</Heading>

      <BarChart data={graphData} width={dimensions} height={dimensions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xAxisDataKeyDate" stroke={polarAngleAxisTextColor} />
        <YAxis stroke={polarAngleAxisTextColor} />
        <Tooltip labelStyle={{ color: "black" }} />
        <Legend />
        {bars}
      </BarChart>
    </Box>
  );
};
