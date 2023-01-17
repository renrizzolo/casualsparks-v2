import * as React from "react";
import { lightTheme, darkTheme } from "./theme.css";
import "./global.css";

export interface ThemeProviderProps {}

export interface ThemeContextProps {
  mode?: "light" | "dark";
  setMode?: React.Dispatch<React.SetStateAction<"light" | "dark" | undefined>>;
  className?: string;
}

const ThemeContext = React.createContext<ThemeContextProps>({});

const ThemeProvider = ({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) => {
  const [mode, setMode] = React.useState<ThemeContextProps["mode"]>("light");
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        className: mode === "light" ? lightTheme : darkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => React.useContext(ThemeContext);

export default ThemeProvider;
