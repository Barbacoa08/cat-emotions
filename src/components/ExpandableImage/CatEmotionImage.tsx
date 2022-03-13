import {
  Box,
  Button,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export const CatEmotionImage = ({ alt, src }: { src: string; alt: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  return (
    <Box>
      <Image
        alt={alt}
        borderRadius={10}
        cursor="zoom-in"
        onClick={onOpen}
        src={src}
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

                // TODO: if user is signed in:
                // toast({
                //   title: "Saved!",
                //   description:
                //     "Your Cat Emotion has been saved to your Cat Emotion History!",
                //   status: "success",
                //   duration: 9000,
                //   isClosable: true,
                // });
                // else
                toast({
                  title: "Ope! You're not signed in doncha know!",
                  description:
                    "Sorry about that, but you'll need to sign in to save your Cat Emotion.",
                  status: "warning",
                  duration: 9000,
                  isClosable: true,
                });
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
