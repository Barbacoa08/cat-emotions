import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

export const ExternalLink: FC<{ to: string }> = ({ children, to }) => {
  const linkColor = useColorModeValue("blue", "blue.200");

  return (
    <ChakraLink href={to} color={linkColor} isExternal>
      {children}
    </ChakraLink>
  );
};
