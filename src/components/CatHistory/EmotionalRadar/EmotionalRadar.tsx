import { Box, Heading, Text } from "@chakra-ui/react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

interface EmotionalRadarProps {
  data: any[];
  dimensions: number;
}

export const EmotionalRadar = ({ data, dimensions }: EmotionalRadarProps) => {
  return (
    <Box as="section">
      <Heading as="h2">Emotional Radar</Heading>

      <Text>https://recharts.org/en-US/examples/SimpleRadarChart</Text>

      <ResponsiveContainer width="100%" height={dimensions}>
        <RadarChart
          // cx={300}
          // cy={250}
          // outerRadius={150}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Emotions"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
};
