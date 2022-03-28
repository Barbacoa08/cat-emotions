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

import { InternalLink } from "components";
import { routes } from "navigation";

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
            This is a random idea I had while working with my therapist. I was
            having a difficult time articulating my emotions and later on that
            week saw a picture of a cat that I thought <i>perfectly</i>{" "}
            expressed my emotional state. So I built this app for myself, but I
            hope that it'll be useful to others as well.
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
            <Text>
              Sometimes a single word or phrase just isn't enough. I find it
              helpful to occasionally just write out my thoughts and feelings,
              so the "Why How" is a place for you to do that. I don't actually
              store everything written down, instead I only store the "keywords"
              that you use (effectively the adjectives and verbs you use).
            </Text>
            <Text>
              If you're currious exactly how I do that,{" "}
              <InternalLink to="https://github.com/michaeldelorenzo/keyword-extractor">
                I use this library
              </InternalLink>
              .{" "}
              <InternalLink to="https://github.com/Barbacoa08/cat-emotions">
                And this is a link
              </InternalLink>{" "}
              to my source code for how I use that library.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Is my data being sold?
            </Box>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel textAlign="left">
            Nope! I do not sell any data in any way.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Are you making money off of this?
            </Box>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel textAlign="left">
            Nope! But if you think that I <i>should be</i>, you can send me a
            tip via PayPal/Venmo/Buy-me-a-coffee at the bottom of{" "}
            <InternalLink to={routes.about}>the About page</InternalLink>.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};
