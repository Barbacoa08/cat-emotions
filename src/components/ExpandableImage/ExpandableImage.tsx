import {
  Box,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const ExpandableImage = ({ alt, src }: { src: string; alt: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        </ModalContent>
      </Modal>
    </Box>
  );
};
