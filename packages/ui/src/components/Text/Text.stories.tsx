import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: `This is a paragraph of text, basically it's nonsense though.
    If you're still reading, you should reconsider, as there's nothing of real value here. 
    Although, if you stop reading, you might miss out on the really interesting tidbit at the end of the paragraph. Hold on. I'm getting a call. Sorry, I have to go now!`,
  },
};
