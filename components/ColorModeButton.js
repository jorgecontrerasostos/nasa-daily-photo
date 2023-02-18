import React from "react";
import { Button, Flex, ButtonGroup } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import { IconContext } from "react-icons";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="center" gap="2" mt={4}>
      <ButtonGroup width="100%" justifyContent="center">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <IconContext.Provider value={{ color: "#1C1C1C", size: "18px" }}>
              <FaMoon />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: "#F9CB00", size: "18px" }}>
              <FaSun />
            </IconContext.Provider>
          )}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default ColorModeButton;
