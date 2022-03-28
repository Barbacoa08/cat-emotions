import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const InternalLink: FC<{ to: string }> = ({ children, to }) => {
  const linkColor = useColorModeValue("blue", "blue.200");

  return (
    <ChakraLink as={NavLink} to={to} color={linkColor}>
      {children}
    </ChakraLink>
  );
};
