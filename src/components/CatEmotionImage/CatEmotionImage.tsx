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
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { CreatableSelect, GroupBase, OptionBase } from "chakra-react-select";
import netlifyIdentity from "netlify-identity-widget";
import { useMemo, useState } from "react";

import { addEmotion } from "graphql";
import { allTags } from "images";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const allTagOptions = useMemo(() => allTags.map(stringToOption), []);
  const [selectedTags, setSelectedTags] = useState(tags.map(stringToOption));

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

        <ModalContent title="Cat confirmation and emotional tag selection">
          <ModalBody>
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

            <FormControl p={2} isInvalid={selectedTags.length === 0}>
            <FormLabel>Select with creatable options</FormLabel>

            <CreatableSelect<EmotionOption, true, GroupBase<EmotionOption>>
              closeMenuOnSelect={false}
              isMulti
              name="emotion tags"
                options={allTagOptions}
                placeholder="Emotional tags"
                value={selectedTags}
                onChange={(newSelected) =>
                  setSelectedTags(
                    newSelected.map((o) => stringToOption(o.value))
                  )
                }
              />

              <FormErrorMessage>
                You must select at least one tag
              </FormErrorMessage>
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
              disabled={selectedTags.length === 0}
              variant="solid"
              onClick={() => {
                onClose();

                const user = netlifyIdentity.currentUser();
                if (!user) {
                  toast({
                    title: "Ope! You're not signed in doncha know!",
                    description:
                      "Sorry about that, but you'll need to sign in to save your Cat Emotion.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                } else {
                  toast({
                    title: "Saving your Cat Emotion!",
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                  });

                  addEmotion({
                    user: user.email,
                    image: src,
                    emotions: selectedTags?.join(","),
                  }).then(() => {
                    toast({
                      title: "Saved!",
                      description:
                        "Your Cat Emotion has been saved to your Cat Emotion History!",
                      status: "success",
                      duration: 9000,
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
