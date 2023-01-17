import { style } from "@vanilla-extract/css";

// same styles are applied in global.css.ts
// as applying this to Box caused specificity issues
export const div = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  fontSize: "100%",
  minWidth: 0,
  verticalAlign: "baseline",
  WebkitTapHighlightColor: "transparent",
});

export const button = style({
  outline: "none",
  border: 0,
  lineHeight: 1,
});
