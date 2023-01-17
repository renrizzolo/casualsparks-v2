import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkles.css";

export const heading = recipe({
  base: [
    sprinkles({ fontFamily: "heading", lineHeight: "1", marginTop: "none" }),
  ],
  variants: {
    color: {
      muted: [
        sprinkles({
          color: "text-heading",
        }),
      ],
      default: [
        sprinkles({
          color: "text-base",
        }),
      ],
    },
    level: {
      1: sprinkles({ fontSize: "h1", fontWeight: "bold", marginBottom: "md" }),
      2: sprinkles({ fontSize: "h2", fontWeight: "bold", marginBottom: "sm" }),
      3: sprinkles({ fontSize: "h3", marginBottom: "sm" }),
      4: sprinkles({ fontSize: "h4", marginBottom: "sm" }),
      5: sprinkles({ fontSize: "h5", marginBottom: "xs" }),
    },
  },

  defaultVariants: {
    color: "default",
  },
});
