import { Button, ThemeProvider, useThemeValue } from "ui";
import "ui/dist/style.css";

export default function Web() {
  return (
    <ThemeProvider>
      <Inner>
        <div>
          <h1>Web</h1>
          <Button color="primary">Button</Button>
        </div>
        this is in theme
      </Inner>
    </ThemeProvider>
  );
}

const Inner = ({ children }: { children: any }) => {
  const { mode, setMode, className } = useThemeValue();

  return <div className={className}>{children}</div>;
};
