import * as React from "react";
import clsx from "clsx";
import { Sprinkles } from "../../styles/sprinkles.css";
import Box from "../Box";
import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../Box/Box";
import { button } from "./button.css";

type ButtonVariants = Parameters<typeof button>[0];

export type ButtonProps<C extends React.ElementType = "button"> =
  PolymorphicComponentPropsWithRef<
    C,
    ButtonVariants & {
      onClick?: () => void;
      className?: string;
    } & Omit<Sprinkles, "color">
  >;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement | null;

export const Button: ButtonComponent & { displayName?: string } =
  React.forwardRef(
    <C extends React.ElementType = "button">(
      {
        onClick,
        as,
        color = "muted",
        size = "md",
        variant = "flat",
        corners,
        className,
        children,
        ...rest
      }: ButtonProps<C>,
      ref?: PolymorphicRef<C>
    ) => {
      return (
        <Box
          ref={ref}
          as={as ?? "button"}
          type={as === "button" ? "button" : undefined}
          onClick={onClick}
          className={clsx(
            button({
              color,
              size,
              corners,
              variant,
            }),
            className
          )}
          {...rest}
        >
          {children}
        </Box>
      );
    }
  );

Button.displayName = "Button";
