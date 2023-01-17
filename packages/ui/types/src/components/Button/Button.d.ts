import * as React from "react";
import { Sprinkles } from "../../styles/sprinkles.css";
import type { PolymorphicComponentPropsWithRef } from "../Box/Box";
import { button } from "./button.css";
declare type ButtonVariants = Parameters<typeof button>[0];
export declare type ButtonProps<C extends React.ElementType = "button"> = PolymorphicComponentPropsWithRef<C, ButtonVariants & {
    onClick?: () => void;
    className?: string;
} & Omit<Sprinkles, "color">>;
declare type ButtonComponent = <C extends React.ElementType = "button">(props: ButtonProps<C>) => React.ReactElement | null;
export declare const Button: ButtonComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Button.d.ts.map