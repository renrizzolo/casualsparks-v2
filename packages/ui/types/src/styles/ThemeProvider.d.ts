import * as React from "react";
import "./global.css";
export interface ThemeProviderProps {
}
export interface ThemeContextProps {
    mode?: "light" | "dark";
    setMode?: React.Dispatch<React.SetStateAction<"light" | "dark" | undefined>>;
    className?: string;
}
declare const ThemeProvider: ({ children, }: React.PropsWithChildren<ThemeProviderProps>) => JSX.Element;
export declare const useThemeValue: () => ThemeContextProps;
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.d.ts.map