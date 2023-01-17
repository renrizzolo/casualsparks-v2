import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalFontFace("basier", {
  src: `url("/fonts/basier/basiersquare-regular-webfont.eot") format("embedded-opentype"),
    url("/fonts/basier/basiersquare-regular-webfont.woff2") format("woff2"),
    url("/fonts/basier/basiersquare-regular-webfont.woff") format("woff"),
    url("/fonts/basier/basiersquare-regular-webfont.ttf") format("truetype")`,
  fontWeight: "normal",
  fontStyle: "normal",
});

globalFontFace("basier", {
  src: `url("/fonts/basier/basiersquare-bold-webfont.eot") format("embedded-opentype"),
    url("/fonts/basier/basiersquare-bold-webfont.woff2") format("woff2"),
    url("/fonts/basier/basiersquare-bold-webfont.woff") format("woff"),
    url("/fonts/basier/basiersquare-bold-webfont.ttf") format("truetype")`,
  fontWeight: "bold",
  fontStyle: "bold",
});

globalFontFace("archia", {
  src: `url("/fonts/archia/archia-bold-webfont.eot") format("embedded-opentype"),
    url("/fonts/archia/archia-bold-webfont.woff2") format("woff2"),
    url("/fonts/archia/archia-bold-webfont.woff") format("woff"),
    url("/fonts/archia/archia-bold-webfont.ttf") format("truetype")`,
  fontWeight: "bold",
  fontStyle: "bold",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  fontSize: "100%",
});
