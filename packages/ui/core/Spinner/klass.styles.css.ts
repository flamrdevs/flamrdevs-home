import { keyframes, style } from "@vanilla-extract/css";

import * as tokens from "../../styles/tokens.ts";
import * as vars from "../../styles/variables.css.ts";

export const Root_base = style({ stroke: vars.va_9 });

export const Root_variants_size_sm = style({ ...tokens.w_8, ...tokens.h_8 });
export const Root_variants_size_md = style({ ...tokens.w_10, ...tokens.h_10 });
export const Root_variants_size_lg = style({ ...tokens.w_12, ...tokens.h_12 });

const Spinner0 = keyframes({
	"100%": {
		transform: "rotate(360deg)",
	},
});

export const G = style({
	transformOrigin: "center",
	animation: `${Spinner0} 2s linear infinite`,
});

const Spinner1 = keyframes({
	"0%": {
		strokeDasharray: "0 150",
		strokeDashoffset: "0",
	},
	"47.5%": {
		strokeDasharray: "42 150",
		strokeDashoffset: "-16",
	},
	"95%, 100%": {
		strokeDasharray: "42 150",
		strokeDashoffset: "-59",
	},
});

export const Circle = style({
	strokeLinecap: "round",
	animation: `${Spinner1} 1.5s ease-in-out infinite`,
});
