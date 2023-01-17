import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme.css";
import { button as reset } from "../../styles/reset.css";
import {
  focusRingMuted,
  focusRingPrimary,
  focusRingSecondary,
  focusRingVar,
} from "../../styles/focusRing.css";

const { color } = vars;

const buttonDefault = style({
  display: "inline-flex",
  userSelect: "none",
  transition: "all 200ms ease",
  ":active": {
    transform: "translateY(1px)",
  },
  ":focus-visible": {
    boxShadow: focusRingVar,
  },
});

export const button = recipe({
  base: [
    reset,
    buttonDefault,
    sprinkles({
      fontFamily: "body",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "sm",
    }),
  ],

  variants: {
    color: {
      muted: [
        sprinkles({
          background: {
            default: "action-muted-base",
            focusVisible: "action-muted-base",
            hover: "action-muted-hover",
            active: "action-muted-active",
          },
          color: "contrast",
        }),
        style({
          vars: {
            [focusRingVar]: focusRingMuted,
          },
        }),
      ],
      primary: [
        sprinkles({
          background: {
            default: "action-primary-base",
            focusVisible: "action-primary-base",
            hover: "action-primary-hover",
            active: "action-primary-active",
          },
          color: "white",
        }),
        style({
          vars: {
            [focusRingVar]: focusRingPrimary,
          },
        }),
      ],
      secondary: [
        sprinkles({
          background: {
            default: "action-secondary-base",
            focusVisible: "action-secondary-base",
            hover: "action-secondary-hover",
            active: "action-secondary-active",
          },
          color: "contrast",
        }),
        style({
          vars: {
            [focusRingVar]: focusRingSecondary,
          },
        }),
      ],
    },
    size: {
      sm: [
        sprinkles({
          paddingX: "sm",
          paddingY: "xs",
          fontSize: "small",
        }),
      ],
      md: sprinkles({
        paddingX: "lg",
        paddingY: "xs",
        fontSize: "base",
      }),
      lg: sprinkles({
        paddingX: "xl",
        paddingY: "sm",
        fontSize: "medium",
      }),
    },
    variant: {
      flat: {},

      outline: style({
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "currentColor",
      }),
      link: style([
        sprinkles({
          color: "primary-600",
          borderRadius: "none",
        }),
        {
          fontWeight: "normal",
          padding: 0,
          background: "unset",
          fontSize: "inherit",
          selectors: {
            "&:hover, &:active, &:focus-visible": {
              background: "unset",
              color: color["primary-700"],
              boxShadow: "none",
            },
          },
        },
      ]),
      menuItem: sprinkles({
        fontWeight: "normal",
        display: "flex",
        width: "100%",
        paddingY: "sm",
        justifyContent: "flex-start",
        paddingX: "lg",
        textAlign: "left",
        borderRadius: "none",
      }),
    },
    corners: {
      rounded: sprinkles({ borderRadius: "round" }),
      sharp: sprinkles({ borderRadius: "none" }),
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        color: "muted",
        variant: "outline",
      },
      style: sprinkles({
        background: {
          default: "muted-50",
          hover: "muted-100",
          active: "muted-200",
          focusVisible: "muted-50",
        },
      }),
    },
    {
      variants: {
        color: "primary",
        variant: "outline",
      },
      style: sprinkles({
        color: "primary-800",
        background: {
          default: "primary-100",
          hover: "primary-200",
          active: "primary-300",
          focusVisible: "primary-100",
        },
      }),
    },
    {
      variants: {
        color: "secondary",
        variant: "outline",
      },
      style: sprinkles({
        background: {
          default: "secondary-100",
          hover: "secondary-200",
          active: "secondary-300",
          focusVisible: "secondary-100",
        },
        color: "secondary-800",
      }),
    },
  ],

  defaultVariants: {
    color: "muted",
    size: "md",
    variant: "flat",
  },
});
