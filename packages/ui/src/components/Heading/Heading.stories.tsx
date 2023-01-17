import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
} as Meta<typeof Heading>;

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: "Heading 1",
    level: 1,
  },
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);
    expect(getByRole("heading")).toHaveAccessibleName("Heading");
  },
};
