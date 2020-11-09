import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options:{

  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  ),
];