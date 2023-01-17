import * as React from "react";
import { StoryContext } from "@storybook/types";
import "../styles/global.css";
export interface ThemeDecoratorProps {
    context: StoryContext;
}
declare const ThemeDecorator: ({ children, context, }: React.PropsWithChildren<ThemeDecoratorProps>) => JSX.Element;
export default ThemeDecorator;
//# sourceMappingURL=ThemeDecorator.d.ts.map