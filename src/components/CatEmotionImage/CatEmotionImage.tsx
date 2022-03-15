import {
  Badge,
  Box,
  Button,
  IconButton,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import netlifyIdentity from "netlify-identity-widget";

import { addEmotion } from "graphql";

export interface CatEmotionImageProps {
  alt: string;
  src: string;
  tags: string[];
}

export const CatEmotionImage = ({ alt, src, tags }: CatEmotionImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

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

          <Stack direction="row">
            {tags.map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </Stack>

          <ModalFooter>
            <Text align="center" padding={2}>
              Is this you right now?
            </Text>

            <Button variant="outline" onClick={onClose} marginRight={10}>
              Nah
            </Button>

            <Button
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
                    emotions: tags?.join(","),
                  }).then((r) => {
                    console.log("addEmotion r", r);
                    console.log("datetime", new Date(r.returning[0].datetime));
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
