import { extendTheme } from "@chakra-ui/react";

// 3. extend the theme

const theme = extendTheme({
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "ultra-slow",
      },
    },
  },
  config: {
    disableTransitionOnChange: true,
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
