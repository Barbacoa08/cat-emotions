import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { GraphData } from "../CatHistory";

interface EmotionalRadarProps {
  data: GraphData[];
  dimensions: number;
}

export const EmotionalRadar = ({ data, dimensions }: EmotionalRadarProps) => {
  const polarAngleAxisTextColor = useColorModeValue("black", "white");

  return (
    <Box as="section">
      <Heading as="h2" id="emotional-radar-chart">
        Emotional Radar
      </Heading>

      <Text>https://recharts.org/en-US/examples/SimpleRadarChart</Text>

      <ResponsiveContainer width="100%" height={dimensions}>
        <RadarChart data={data}>
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
