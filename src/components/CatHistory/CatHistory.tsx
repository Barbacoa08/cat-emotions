import {
  Box,
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
import { useState } from "react";

import { EmotionalRadar } from "./EmotionalRadar";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export const CatHistory = () => {
  const user = netlifyIdentity.currentUser();
  const [dimensions, setDimensions] = useState(300);

  return (
    <Box role="main">
      <Heading as="h1">Cat History</Heading>

      {user ? (
        <Box>
          <FormControl marginBottom={5}>
            <FormLabel>Dimensions for the Cat History Graph</FormLabel>

            <NumberInput
              step={100}
              value={dimensions}
              min={100}
              max={1000}
              onChange={(_s, n) => setDimensions(n)}
            >
              <NumberInputField />

              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <EmotionalRadar data={data} dimensions={dimensions} />
        </Box>
      ) : (
        <Text>
          Ope, you need to sign in and create at least one Cat Emotion before
          you can view your history.
        </Text>
      )}
    </Box>
  );
};
