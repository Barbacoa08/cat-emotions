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
import { useMemo } from "react";

import { ExternalLink, InternalLink } from "components";
import { routes } from "navigation";

export const FAQs = () => {
  const defaultIndex = useMemo(() => {
    const id = window.location.hash.slice(1);
    switch (id) {
      case routes.faqsSections.what.id:
        return routes.faqsSections.what.index;

      case routes.faqsSections.whyHow.id:
        return routes.faqsSections.whyHow.index;

      default:
        return undefined;
    }
  }, []);

  return (
    <Container>
      <Heading as="h1" role="main" paddingBottom={5}>
        Frequently Asked Questions
      </Heading>

      <Accordion allowToggle defaultIndex={defaultIndex}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              What is Cat Emotions?
            </Box>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel textAlign="left" id={routes.faqsSections.what.id}>
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

          <AccordionPanel textAlign="left" id={routes.faqsSections.whyHow.id}>
            <Text paddingBottom={2}>
              When selecting you Cat Emotion, sometimes a single word or phrase
              just isn't enough. I find it helpful to occasionally write out my
              thoughts and feelings, so the "Why How" is a place for you to do
              that. Why are you feeling this way? How did you come to this
              emotion? The "Why How" section is a place for you to express those
              thoughts (if you want to).
            </Text>

            <Text paddingBottom={2}>
              I don't actually store everything written down, instead I only
              store the "keywords" that you use (effectively the adjectives and
              verbs you use).
            </Text>

            <Text paddingBottom={2}>
              If you're currious exactly how I do that,{" "}
              <ExternalLink to="https://github.com/michaeldelorenzo/keyword-extractor">
                I use this library
              </ExternalLink>
              .{" "}
              <ExternalLink to="https://github.com/Barbacoa08/cat-emotions">
                And this is a link
              </ExternalLink>{" "}
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
