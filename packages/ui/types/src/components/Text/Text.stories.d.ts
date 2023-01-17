/// <reference types="react" />
import { StoryObj } from "@storybook/react";
import { Text } from "./Text";
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, {
    className?: import("clsx").ClassValue;
    color?: "text-base" | "text-label" | undefined;
} & Pick<{
    fontSize?: ("medium" | "small" | "root" | "base" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | {
        xs?: "medium" | "small" | "root" | "base" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | undefined;
        sm?: "medium" | "small" | "root" | "base" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | undefined;
        md?: "medium" | "small" | "root" | "base" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | undefined;
        lg?: "medium" | "small" | "root" | "base" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | undefined;
        xl?: "medium" | "small" | "root" | "base" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | undefined;
    }) | undefined;
    display?: ("none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | {
        xs?: "none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | undefined;
        sm?: "none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | undefined;
        md?: "none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | undefined;
        lg?: "none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | undefined;
        xl?: "none" | "block" | "flex" | "grid" | "inline-block" | "inline-flex" | undefined;
    }) | undefined;
    gap?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    flexDirection?: ("column" | "row" | {
        xs?: "column" | "row" | undefined;
        sm?: "column" | "row" | undefined;
        md?: "column" | "row" | undefined;
        lg?: "column" | "row" | undefined;
        xl?: "column" | "row" | undefined;
    }) | undefined;
    flexWrap?: ("nowrap" | "wrap" | "wrap-reverse" | {
        xs?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        sm?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        md?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        lg?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        xl?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    }) | undefined;
    flexShrink?: (number | "auto" | {
        xs?: number | "auto" | undefined;
        sm?: number | "auto" | undefined;
        md?: number | "auto" | undefined;
        lg?: number | "auto" | undefined;
        xl?: number | "auto" | undefined;
    }) | undefined;
    flexGrow?: (number | "auto" | {
        xs?: number | "auto" | undefined;
        sm?: number | "auto" | undefined;
        md?: number | "auto" | undefined;
        lg?: number | "auto" | undefined;
        xl?: number | "auto" | undefined;
    }) | undefined;
    justifyContent?: ("space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | {
        xs?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        sm?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        md?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        lg?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        xl?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    }) | undefined;
    alignItems?: ("stretch" | "center" | "flex-end" | "flex-start" | {
        xs?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        sm?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        md?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        lg?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        xl?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    }) | undefined;
    width?: ("auto" | "100%" | "container" | {
        xs?: "auto" | "100%" | "container" | undefined;
        sm?: "auto" | "100%" | "container" | undefined;
        md?: "auto" | "100%" | "container" | undefined;
        lg?: "auto" | "100%" | "container" | undefined;
        xl?: "auto" | "100%" | "container" | undefined;
    }) | undefined;
    maxWidth?: ("auto" | "100%" | "container" | {
        xs?: "auto" | "100%" | "container" | undefined;
        sm?: "auto" | "100%" | "container" | undefined;
        md?: "auto" | "100%" | "container" | undefined;
        lg?: "auto" | "100%" | "container" | undefined;
        xl?: "auto" | "100%" | "container" | undefined;
    }) | undefined;
    height?: ("auto" | "none" | "100%" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "auto" | "none" | "100%" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "auto" | "none" | "100%" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "auto" | "none" | "100%" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "auto" | "none" | "100%" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "auto" | "none" | "100%" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    paddingTop?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    paddingBottom?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    paddingLeft?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    paddingRight?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    marginTop?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    marginBottom?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    marginLeft?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    marginRight?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    padding?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    paddingX?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    paddingY?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    margin?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    marginX?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
    marginY?: ("none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | {
        xs?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        sm?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        md?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        lg?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
        xl?: "none" | "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    }) | undefined;
} & {
    color?: ("black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | {
        default?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        active?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        hover?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        focusVisible?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
    }) | undefined;
    background?: ("black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | {
        default?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        active?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        hover?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        focusVisible?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
    }) | undefined;
    borderColor?: ("black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | {
        default?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        active?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        hover?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
        focusVisible?: "black" | "white" | "action-primary-base" | "action-primary-hover" | "action-primary-active" | "action-secondary-base" | "action-secondary-hover" | "action-secondary-active" | "action-muted-base" | "action-muted-hover" | "action-muted-active" | "contrast" | "secondary-50" | "secondary-100" | "secondary-200" | "secondary-300" | "secondary-400" | "secondary-500" | "secondary-600" | "secondary-700" | "secondary-800" | "secondary-900" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900" | "muted-50" | "muted-100" | "muted-200" | "muted-300" | "muted-400" | "muted-500" | "muted-600" | "muted-700" | "muted-800" | "muted-900" | "surface-0" | "surface-1" | "surface-2" | "text-base" | "text-label" | "text-heading" | undefined;
    }) | undefined;
} & {
    fontFamily?: "body" | "heading" | undefined;
    lineHeight?: "1" | "1.4" | "1.6" | undefined;
    fontWeight?: "normal" | "bold" | undefined;
    borderBottomLeftRadius?: "none" | "round" | "xs" | "sm" | "md" | undefined;
    borderBottomRightRadius?: "none" | "round" | "xs" | "sm" | "md" | undefined;
    borderTopLeftRadius?: "none" | "round" | "xs" | "sm" | "md" | undefined;
    borderTopRightRadius?: "none" | "round" | "xs" | "sm" | "md" | undefined;
    overflow?: "auto" | "hidden" | undefined;
    textAlign?: "center" | "left" | "right" | undefined;
    borderRadius?: "none" | "round" | "xs" | "sm" | "md" | undefined;
}, "margin" | "display" | "fontFamily" | "fontSize" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "textAlign" | "padding" | "paddingX" | "paddingY" | "marginX" | "marginY"> & Pick<any, string | number | symbol> & {
    as?: import("react").ElementType<any> | undefined;
} & {
    children?: import("react").ReactNode;
} & Omit<Pick<any, string | number | symbol>, string | number | symbol>>;
export default _default;
export declare const Default: StoryObj<typeof Text>;
//# sourceMappingURL=Text.stories.d.ts.map