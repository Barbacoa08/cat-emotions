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
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useGlobal, useState } from "reactn";

import { getUserHistory, GetUserHistoryResult } from "graphql";

import { EmotionalJourney } from "./EmotionalJourney";
import { EmotionalRadar } from "./EmotionalRadar";

export const CatHistory = () => {
  const [user] = useGlobal("user");
  useEffect(() => {
    if (user) {
      getUserHistory(user.email).then((r) => setData(r));
    }
  }, [user]);

  const [dimensions, setDimensions] = useState(300);
  const [data, setData] = useState<GetUserHistoryResult[]>([]);
  const [graphSelection, setGraphSelection] = useState("radar");

  return (
    <Box role="main">
      <Heading as="h1">Cat History</Heading>

      {user && data.length ? (
        <Flex direction="column" alignItems="center">
          <Stack>
            <FormControl>
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

            <FormControl>
              <FormLabel>Graph Selection</FormLabel>

              <RadioGroup onChange={setGraphSelection} value={graphSelection}>
                <Stack direction="row">
                  <Radio value="radar">Cats (emotional frequency)</Radio>
                  <Radio value="history">Histroy (by date)</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {graphSelection === "radar" && (
              <EmotionalRadar data={data} dimensions={dimensions} />
            )}
            {graphSelection === "history" && (
              <EmotionalJourney data={data} dimensions={dimensions} />
            )}
          </Stack>
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
