import React from "react";
import {
  Box,
  Button,
  Flex,
  ButtonGroup,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  return (
    <Flex alignItems="center" gap="2" mx={64} mt={6}>
      <ButtonGroup width="100%" justifyContent="center">
        <Button>
          <FaMoon />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
