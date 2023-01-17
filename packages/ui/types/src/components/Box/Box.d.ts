import * as React from "react";
import type { Sprinkles } from "../../styles/sprinkles.css";
import { type ClassValue } from "clsx";
declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
export declare type ClassName = {
    className?: ClassValue;
};
declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
declare type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;
export declare type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & PropsOf<C> & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props & PropsOf<C>>>;
export declare type PolymorphicRef<C extends React.ElementType = "div"> = React.ComponentPropsWithRef<C>["ref"];
export declare type PolymorphicComponentPropsWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProps<C, Props> & {
    ref?: PolymorphicRef<C>;
};
export declare type BoxProps<C extends React.ElementType = "div"> = PolymorphicComponentPropsWithRef<C, ClassName & Sprinkles>;
declare type BoxComponent = <C extends React.ElementType = "span">(props: BoxProps<C>) => React.ReactElement | null;
export declare const Box: BoxComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Box.d.ts.map