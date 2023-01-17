/// <reference types="react" />
import { StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("@vanilla-extract/recipes/dist/declarations/src/types").VariantSelection<{
    color: {
        muted: string[];
        default: string[];
    };
    level: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
}> & {
    children?: import("react").ReactNode;
} & {
    level: 1 | 2 | 3 | 4 | 5;
    className?: import("clsx").ClassValue;
}>;
export default _default;
export declare const Default: StoryObj<typeof Heading>;
//# sourceMappingURL=Heading.stories.d.ts.map