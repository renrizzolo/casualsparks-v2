import * as React from "react";
import { div } from "../../styles/reset.css";
import type { AllHTMLAttributes, ElementType } from "react";
import { sprinkles } from "../../styles/sprinkles.css";
import type { Sprinkles } from "../../styles/sprinkles.css";
import clsx, { type ClassValue } from "clsx";
import useSprinklesProps from "../../hooks/useSprinklesProps";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type ClassName = {
  className?: ClassValue;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & PropsOf<C> & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props & PropsOf<C>>>;

export type PolymorphicRef<C extends React.ElementType = "div"> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

export type BoxProps<C extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C, ClassName & Sprinkles>;

type BoxComponent = <C extends React.ElementType = "span">(
  props: BoxProps<C>
) => React.ReactElement | null;

export const Box: BoxComponent & { displayName?: string } = React.forwardRef(
  <C extends React.ElementType = "div">(
    { as, className, ...rest }: BoxProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const { sprinklesProps, restProps } = useSprinklesProps({ ...rest });

    const Comp = as ?? "div";
    return (
      <Comp
        className={clsx(div, sprinkles(sprinklesProps), className)}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Box.displayName = "Box";
