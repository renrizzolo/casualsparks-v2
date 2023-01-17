import * as React from "react";
import clsx, { type ClassValue } from "clsx";
import { heading } from "./heading.css";
import Box from "../Box";

type HeadingVariants = Parameters<typeof heading>[0];

const headings = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
} as const;

export type HeadingProps = React.PropsWithChildren<HeadingVariants> & {
  level: keyof typeof headings;
  className?: ClassValue;
};

export const Heading = ({ level, color, className, ...rest }: HeadingProps) => {
  const as = headings[level];
  return (
    <Box
      as={as}
      className={clsx(heading({ level, color }), className)}
      {...rest}
    />
  );
};

Heading.displayName = "Heading";
