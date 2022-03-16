import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import netlifyIdentity from "netlify-identity-widget";
import { useEffect, useMemo, useState } from "react";

import { getUserHistory } from "graphql";

import { EmotionalRadar } from "./EmotionalRadar";

interface GraphData {
  polarAngleAxisDataKey: string;
  radarDataKey: number;
}

export const CatHistory = () => {
  // TODO: make/find a hook for this
  const user = useMemo(() => netlifyIdentity.currentUser(), []);
  const [dimensions, setDimensions] = useState(300);

  const [data, setData] = useState<GraphData[]>([]);

  useEffect(() => {
    if (user) {
      getUserHistory(user.email).then((res) => {
        const emotionsCount = res
          .map((dataPoint) => dataPoint.emotions)
          .flat()
          .reduce((acc, cur) => {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
            return acc;
          }, {} as { [key: string]: number });
        const graphData: GraphData[] = Object.keys(emotionsCount).map(
          (key) => ({
            polarAngleAxisDataKey: key,
            radarDataKey: emotionsCount[key],
          })
        );

        setData(graphData);
      });
    }
  }, [user]);

  return (
    <Box role="main">
      <Heading as="h1">Cat History</Heading>

      {user && data.length ? (
        <Flex direction="column" alignItems="center">
          <FormControl marginBottom={5} width="20rem">
            <FormLabel>Dimensions for the Cat History Graph</FormLabel>

            <NumberInput
              max={1000}
              min={100}
              onChange={(_s, n) => setDimensions(n)}
              step={100}
              value={dimensions}
            >
              <NumberInputField />

              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <EmotionalRadar data={data} dimensions={dimensions} />
        </Flex>
      ) : (
        <Text>
          Ope, you need to sign in and create at least one Cat Emotion before
          you can view your history.
        </Text>
      )}
    </Box>
  );
};
