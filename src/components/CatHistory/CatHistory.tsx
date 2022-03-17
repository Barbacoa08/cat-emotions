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
import { useEffect, useGlobal, useState } from "reactn";

import { getUserHistory, GetUserHistoryResult } from "graphql";

import { EmotionalRadar } from "./EmotionalRadar";

export const CatHistory = () => {
  const [user] = useGlobal("user");
  const [dimensions, setDimensions] = useState(300);

  const [data, setData] = useState<GetUserHistoryResult[]>([]);

  useEffect(() => {
    if (user) {
      getUserHistory(user.email).then((r) => setData(r));
    }
  }, [user]);

  return (
    <Box role="main">
      <Heading as="h1">Cat History</Heading>

      {user && data.length ? (
        <Flex direction="column" alignItems="center">
          <FormControl margin={5} width="20rem">
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
