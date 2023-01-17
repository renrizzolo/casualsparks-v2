import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { sprinkles } from "../../styles/sprinkles.css";
import Box from "../Box";
import Heading from "../Heading";
import { Text } from "../Text/Text";
import { Button, ButtonProps } from "./Button";
import { style } from "@vanilla-extract/css";
import React, { useState } from "react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);
    expect(getByRole("button")).toHaveAccessibleName("Button");
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "sm",
  },
};
export const Large: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    color: "primary",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    color: "secondary",
  },
};

export const Muted: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    color: "muted",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    children: "Link",
    variant: "link",
    as: "a",
    href: "#",
  },
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);
    expect(getByRole("link")).toHaveAccessibleName("Link");
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export const PrimaryOutline: StoryObj<typeof Button> = {
  args: {
    ...Primary.args,
    variant: "outline",
  },
};

export const SecondaryOutline: StoryObj<typeof Button> = {
  args: {
    ...Secondary.args,
    variant: "outline",
  },
};

export const MutedOutline: StoryObj<typeof Button> = {
  args: {
    ...Muted.args,
    variant: "outline",
  },
};

export const Test = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      <Box>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          style={
            isOpen
              ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
              : {}
          }
        >
          Le btn
        </Button>
        {isOpen && (
          <>
            <Box
              background="action-muted-base"
              // padding="xl"
              style={{ maxWidth: 250 }}
              overflow="hidden"
              className={sprinkles({
                borderBottomLeftRadius: "md",
                borderBottomRightRadius: "md",
                borderTopRightRadius: "md",
              })}
            >
              <Item>Menu Item 1</Item>
              <Item>Menu Item 2</Item>
              <Item>Menu Item 33</Item>
              <Item>Menu Item 4</Item>
            </Box>
          </>
        )}
      </Box>
    );
  },
};
const Item = ({ children }: React.PropsWithChildren<{}>) => (
  <Button variant="menuItem">{children}</Button>
);

export const Pair: StoryObj<typeof Button> = {
  render: () => (
    <Box
      paddingX="xl"
      paddingY="xl"
      gap="sm"
      background="surface-1"
      fontFamily="body"
      borderRadius="md"
      display="inline-flex"
      flexWrap="wrap"
      width={"100%"}
    >
      <Box flexShrink={0} width="100%">
        <Text as="span" color="text-label" fontSize={"label"}>
          Label
        </Text>
        <Heading level={3}>Hello</Heading>
        <Text>
          Would you like to save the world? This is a paragrapgh of text, it
          contains only the most satisfactory text devised by humans, for
          comprehension in reading Paragraphs.
        </Text>
      </Box>
      <Button as="a" color="primary">
        Save
      </Button>
      <Button>Cancel</Button>
    </Box>
  ),
};
