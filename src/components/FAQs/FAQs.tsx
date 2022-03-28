import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

export const FAQs = () => {
  return (
    <Container>
      <Heading as="h1" role="main">
        Frequently Asked Questions
      </Heading>

      <Heading as="h2">What is Cat Emotions?</Heading>
      <Text>blah blah</Text>

      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              What is Cat Emotions?
            </Box>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel textAlign="left">
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              What is "Why How"?
            </Box>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel textAlign="left">
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};
