import * as React from "react";
import clsx, { type ClassValue } from "clsx";
import { textDefault } from "./text.css";
import Box from "../Box";
import { PolymorphicComponentProps } from "../Box/Box";
import { Sprinkles } from "../../styles/sprinkles.css";

export type TextProps<C extends React.ElementType = "p"> =
  PolymorphicComponentProps<
    C,
    {
      className?: ClassValue;
      color?: "text-base" | "text-label";
    } & Pick<
      Sprinkles,
      | "display"
      | "fontFamily"
      | "fontSize"
      | "marginBottom"
      | "marginLeft"
      | "marginRight"
      | "marginTop"
      | "paddingBottom"
      | "paddingLeft"
      | "paddingRight"
      | "paddingTop"
      | "textAlign"
      | "margin"
      | "padding"
      | "paddingX"
      | "paddingY"
      | "marginX"
      | "marginY"
    >
  >;

type TextComponent = <C extends React.ElementType = "p">(
  props: TextProps<C>
) => React.ReactElement | null;

export const Text: TextComponent & { displayName?: string } = ({
  as,
  color = "text-base",
  fontSize,
  className,
  ...rest
}) => {
  return (
    <Box
      as={as ?? "p"}
      fontSize={fontSize}
      color={color}
      className={clsx(textDefault, className)}
      {...rest}
    />
  );
};

Text.displayName = "Text";
