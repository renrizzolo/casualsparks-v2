import * as React from "react";
import { type ClassValue } from "clsx";
import { PolymorphicComponentProps } from "../Box/Box";
import { Sprinkles } from "../../styles/sprinkles.css";
export declare type TextProps<C extends React.ElementType = "p"> = PolymorphicComponentProps<C, {
    className?: ClassValue;
    color?: "text-base" | "text-label";
} & Pick<Sprinkles, "display" | "fontFamily" | "fontSize" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "textAlign" | "margin" | "padding" | "paddingX" | "paddingY" | "marginX" | "marginY">>;
declare type TextComponent = <C extends React.ElementType = "p">(props: TextProps<C>) => React.ReactElement | null;
export declare const Text: TextComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Text.d.ts.map