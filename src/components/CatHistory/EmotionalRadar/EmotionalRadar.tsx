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
      <Heading as="h2" id="emotional-radar-chart">
        Emotional Radar
      </Heading>

      <Text>https://recharts.org/en-US/examples/SimpleRadarChart</Text>

      <ResponsiveContainer width="100%" height={dimensions}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="polarAngleAxisDataKey" />
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
