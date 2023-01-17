import {
  createTheme,
  createGlobalTheme,
  createGlobalThemeContract,
  createThemeContract,
} from "@vanilla-extract/css";
import color from "tokens/dist/color";
import colorFlat from "tokens/dist/color-flat";
import colorFlatDark from "tokens/dist/color-flat-dark";
import size from "tokens/dist/size";
import space from "tokens/dist/space";
import font from "tokens/dist/font";
import radius from "tokens/dist/radius";

// const rootVars = createGlobalThemeContract(
//   {
//     space: {
//       none: null,
//       xxxs: null,
//       xxs: null,
//       xs: null,
//       sm: null,
//       md: null,
//       lg: null,
//       xl: null,
//       xxl: null,
//     },
//   },
//   (_value, path) => `csui-${path.join("-")}`
// );

const root = createGlobalTheme(":root", {
  space,
  size,
  radius,
  font,
});

const colors = createThemeContract({
  color: colorFlat,
});

export const lightTheme = createTheme(colors, {
  color: colorFlat,
});

export const darkTheme = createTheme(colors, {
  color: colorFlatDark,
});

export const vars = { ...root, ...colors };
