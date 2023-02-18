import React from "react";
import { Button, Flex, ButtonGroup } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useColorMode } from "@chakra-ui/react";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="center" gap="2" mt={4}>
      <ButtonGroup width="100%" justifyContent="center">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <MoonIcon color="gray.900" />
          ) : (
            <SunIcon color="yellow.400" />
          )}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default ColorModeButton;
