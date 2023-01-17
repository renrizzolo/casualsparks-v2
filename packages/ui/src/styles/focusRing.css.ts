import { createVar } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const focusRingBase = `0px 0px 0px ${vars.space.xxxs} ${vars.color["surface-0"]}, 0px 0px  0px ${vars.space.xxs}`;
export const focusRingPrimary = `${focusRingBase} ${vars.color["primary-300"]}`;
export const focusRingMuted = `${focusRingBase} ${vars.color["muted-300"]}`;
export const focusRingSecondary = `${focusRingBase} ${vars.color["secondary-200"]}`;
export const focusRingVar = createVar();
