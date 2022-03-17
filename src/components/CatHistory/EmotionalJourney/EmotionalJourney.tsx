import { Box, Heading, Text } from "@chakra-ui/react";
import { GetUserHistoryResult } from "graphql";

interface GraphData {
  polarAngleAxisDataKey: string;
  radarDataKey: number;
}

interface EmotionalJourneyProps {
  data: GetUserHistoryResult[];
  dimensions: number;
}

export const EmotionalJourney = ({
  data,
  dimensions,
}: EmotionalJourneyProps) => {
  return (
    <Box as="section">
      <Heading as="h2">Emotional Journey</Heading>

      <Text>https://recharts.org/en-US/examples/SimpleBarChart</Text>
    </Box>
  );
};
