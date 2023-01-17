import * as reset from "./reset.css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
const { color } = vars;

// @TODO move to tokens
const breakpoints = {
  sm: 600,
  md: 768,
  lg: 1024,
  xl: 1280,
};
const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { "@media": `(min-width: ${breakpoints.sm}px)` },
    md: { "@media": `(min-width: ${breakpoints.md}px)` },
    lg: { "@media": `(min-width: ${breakpoints.lg}px)` },
    xl: { "@media": `(min-width: ${breakpoints.xl}px)` },
  },
  defaultCondition: "xs",
  properties: {
    fontSize: vars.font.size,
    display: ["none", "flex", "inline-flex", "block", "inline-block", "grid"],
    gap: vars.space,
    flexDirection: ["row", "column"],
    flexWrap: ["wrap", "nowrap", "wrap-reverse"],
    flexShrink: [0, 1, "auto"],
    flexGrow: [0, 1, "auto"],
    justifyContent: [
      "stretch",
      "center",
      "flex-start",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    width: { ...vars.size, "100%": "100%", auto: "auto" },
    maxWidth: { ...vars.size, "100%": "100%", auto: "auto" },
    height: { ...vars.space, "100%": "100%", auto: "auto" },
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

// Create flattened color keys/values from nested js tokens
// for easier use in our sprinkles.
// color.primary[100] -> 'primary-100': '#...'

// these types are probably stupid

// type Keys = keyof typeof colors;
// type subKeys = keyof typeof colors[Keys];
// const flattenColors = () => {
//   let obj = {};
//   const keys: (keyof typeof colors)[] = Object.keys(colors);
//   keys.map((color) => {
//     const props: (keyof typeof colors[keyof typeof colors])[] = Object.keys(
//       colors[color]
//     );
//     props.map((prop) => {
//       obj[`${color}-${prop}`] = colors[color][prop];
//     });
//   });
//   return obj;
// };

// const colorsFlat = flattenColors() as ColorsFlat;

// const result = Object.keys(colors).reduce((acc, curr: keyof typeof colors) => {
//   const x = colors[curr];
//   const obj = Object.keys(colors[curr]).map(
//     (p: keyof typeof colors[keyof typeof colors]) => ({
//       [`${curr}-${p}`]: colors[curr][p],
//     })
//   );
//   // console.log(obj);
//   return {
//     ...acc,
//     ...obj.reduce((a, v) => ({ ...a, ...v })),
//   };
// }, {});

// // console.log({ result });

// const flatten = <T extends Record<string, string>, P extends keyof T>(
//   obj: T,
//   parent: string
// ): Record<`${P}-${string & keyof T[P]}`, string> => {
//   let res: Record<string, string> = {};

//   for (const [key, value] of Object.entries(obj)) {
//     const propName = parent ? parent + "-" + key : key;

//     if (typeof value === "object" && value !== null) {
//       const prop = `asdf-123` as const;
//       res = {
//         ...res,
//         ...flatten(value, propName),
//       };
//     } else {
//       res[propName] = value;
//     }
//   }

//   return res;
// };

// const t = flatten<typeof colors, keyof typeof colors>(colors);

// type x = keyof typeof colors;
// type ColorsFlat = Record<
//   `${keyof typeof colors}-${keyof typeof colors[keyof typeof colors]}`,
//   string
// >;

// console.log(t);
const nonResponsiveProperties = defineProperties({
  properties: {
    fontFamily: vars.font.family,
    lineHeight: ["1", "1.4", "1.6"],
    fontWeight: ["bold", "normal"],
    borderBottomLeftRadius: vars.radius,
    borderBottomRightRadius: vars.radius,
    borderTopLeftRadius: vars.radius,
    borderTopRightRadius: vars.radius,
    overflow: ["hidden", "auto"],
    textAlign: ["left", "right", "center"],
    borderRadius: vars.radius,
  },
});

const statefulProperties = defineProperties({
  conditions: {
    default: {},
    active: { selector: "&:active" },
    hover: { selector: "&:hover" },
    focusVisible: { selector: "&:focus-visible" },
  },
  defaultCondition: "default",
  properties: {
    color: vars.color,
    background: vars.color,
    borderColor: vars.color,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  statefulProperties,
  nonResponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
