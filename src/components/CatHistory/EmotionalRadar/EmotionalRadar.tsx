import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { GetUserHistoryResult } from "graphql";

interface GraphData {
  polarAngleAxisDataKey: string;
  radarDataKey: number;
}

interface EmotionalRadarProps {
  data: GetUserHistoryResult[];
  dimensions: number;
}

export const EmotionalRadar = ({ data, dimensions }: EmotionalRadarProps) => {
  const [graphData, setGraohData] = useState<GraphData[]>([]);
  useEffect(() => {
    const emotionsCount = data
      .map((dataPoint) => dataPoint.emotions)
      .flat()
      .reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
      }, {} as { [key: string]: number });
    const compiledGraphData: GraphData[] = Object.keys(emotionsCount).map(
      (key) => ({
        polarAngleAxisDataKey: key,
        radarDataKey: emotionsCount[key],
      })
    );

    setGraohData(compiledGraphData);
  }, [data]);

  const polarAngleAxisTextColor = useColorModeValue("black", "white");

  return (
    <Box as="section">
      <Heading as="h2" id="emotional-radar-chart">
        Emotional Radar
      </Heading>

      <ResponsiveContainer width="100%" height={dimensions}>
        <RadarChart data={graphData}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="polarAngleAxisDataKey"
            stroke={polarAngleAxisTextColor}
          />
          <PolarRadiusAxis />
          <Radar
            aria-describedby="emotion-radar-chart"
            dataKey="radarDataKey"
            fill="#8884d8"
            fillOpacity={0.6}
            name="Emotions"
            stroke="#8884d8"
          />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
};
