import * as React from "react";
import { StoryContext } from "@storybook/types";
import { lightTheme, darkTheme } from "../styles/theme.css";
import Box from "../components/Box";
import "../styles/global.css";

export interface ThemeDecoratorProps {
  context: StoryContext;
}

const ThemeDecorator = ({
  children,
  context,
}: React.PropsWithChildren<ThemeDecoratorProps>) => {
  const mode = context.globals.theme;
  console.log(mode);
  return (
    <Box
      className={mode === "light" ? lightTheme : darkTheme}
      background="surface-0"
      padding="xl"
      width="100%"
      maxWidth="container"
    >
      {children}
    </Box>
  );
};

export default ThemeDecorator;
