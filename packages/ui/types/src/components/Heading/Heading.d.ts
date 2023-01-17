import * as React from "react";
import { type ClassValue } from "clsx";
import { heading } from "./heading.css";
declare type HeadingVariants = Parameters<typeof heading>[0];
declare const headings: {
    readonly 1: "h1";
    readonly 2: "h2";
    readonly 3: "h3";
    readonly 4: "h4";
    readonly 5: "h5";
};
export declare type HeadingProps = React.PropsWithChildren<HeadingVariants> & {
    level: keyof typeof headings;
    className?: ClassValue;
};
export declare const Heading: {
    ({ level, color, className, ...rest }: HeadingProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=Heading.d.ts.map