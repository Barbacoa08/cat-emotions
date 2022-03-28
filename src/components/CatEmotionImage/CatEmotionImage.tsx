import { QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { CreatableSelect, GroupBase, OptionBase } from "chakra-react-select";
import keywordExtractor from "keyword-extractor";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGlobal, useMemo, useState } from "reactn";

import { addEmotion } from "graphql";
import { allTags } from "images";
import { routes } from "navigation";

export interface CatEmotionImageProps {
  alt: string;
  src: string;
  tags: string[];
}

interface EmotionOption extends OptionBase {
  label: string;
  value: string;
}

const stringToOption = (s: string): EmotionOption => ({
  label: s,
  value: s,
});

export const CatEmotionImage = ({ alt, src, tags }: CatEmotionImageProps) => {
  const [user] = useGlobal("user");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const allTagOptions = useMemo(() => allTags.map(stringToOption), []);
  const [selectedTagOptions, setSelectedTagOptions] = useState(
    tags.map(stringToOption)
  );

  const [why, setWhy] = useState("");
  const [keywords, setKeywords] = useState("");
  useEffect(() => {
    if (why) {
      setKeywords(
        keywordExtractor
          .extract(why, {
            language: "english",
            remove_digits: false,
            return_changed_case: true,
            return_chained_words: false, // NOTE: if set to true, groups things like ["ten thousand", "kinda sad"] instead of ["ten", "thousand", "kinda", "sad"]
            remove_duplicates: true,
          })
          .join(",")
      );
    } else {
      setKeywords("");
    }
  }, [why]);

  return (
    <Box>
      <IconButton
        aria-label={alt}
        cursor="zoom-in"
        height="auto"
        onClick={onOpen}
        icon={<Image borderRadius={10} maxHeight={400} src={src} />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader as="h1">Select and Record Cat Emotion</ModalHeader>

          <ModalBody role="main">
            <Image
              alt={alt}
              fallbackSrc="https://via.placeholder.com/100"
              objectFit="contain"
              src={src}
              borderRadius={10}
              margin="auto"
            />

            <Text align="center" padding={2}>
              {alt}
            </Text>

            <FormControl isInvalid={selectedTagOptions.length === 0}>
              <FormLabel>Select/Create emotion</FormLabel>

              {/* TODO: this component is a touch buggy, and not accessibility friendly, should replace */}
              <CreatableSelect<EmotionOption, true, GroupBase<EmotionOption>>
                closeMenuOnSelect={false}
                isMulti
                name="emotion tags"
                options={allTagOptions}
                placeholder="Emotional tags"
                value={selectedTagOptions}
                onChange={(newSelected) =>
                  setSelectedTagOptions(
                    newSelected.map((o) => stringToOption(o.value))
                  )
                }
              />

              <FormErrorMessage>
                You must select or create at least one tag
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>
                Why How? (optional)
                <Tooltip
                  hasArrow
                  label="Use this to describe any details on why you're feeling this way. Or how you've come to feel this way. For more information, click the Question Mark"
                >
                  <IconButton
                    aria-label="Use this to describe any details on why you're feeling this way. Or how you've come to feel this way. For more information, click the Question Mark"
                    icon={<QuestionIcon />}
                    variant="ghost"
                    as={NavLink}
                    to={routes.faqsSections.whyHow.link}
                  />
                </Tooltip>
              </FormLabel>

              <Textarea onChange={(e) => setWhy(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Text align="center" padding={2}>
              Is this you right now?
            </Text>

            <Button variant="outline" onClick={onClose} marginRight={10}>
              Nah
            </Button>

            <Button
              disabled={selectedTagOptions.length === 0}
              variant="solid"
              onClick={() => {
                onClose();

                if (!user) {
                  toast({
                    title: "Ope! You're not signed in doncha know!",
                    description:
                      "Sorry about that, but you'll need to sign in to save your Cat Emotion.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  toast({
                    title: "Saving your Cat Emotion!",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                  });

                  addEmotion({
                    emotions: selectedTagOptions.map((o) => o.value).join(","),
                    image: src,
                    user: user.email,
                    why: keywords,
                  })
                    .then(() => {
                      toast({
                        title: "Saved!",
                        description:
                          "Your Cat Emotion has been saved to your Cat Emotion History!",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                    })
                    .catch(() => {
                      toast({
                        title: "Ope! There was an error on the server!",
                        description:
                          "Sorry about that, try reloading the page and trying again",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                      });
                    });
                }
              }}
            >
              Definitely me!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
