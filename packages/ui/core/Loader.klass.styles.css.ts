import { keyframes, style } from "@vanilla-extract/css";

import * as tokens from "./../styles/tokens.ts";
import * as vars from "./../styles/variables.css.ts";

export const Root_base = style({ stroke: vars.v_a_9 });

export const Root_variants_size_sm = style({ ...tokens.w_8, ...tokens.h_8 });
export const Root_variants_size_md = style({ ...tokens.w_10, ...tokens.h_10 });
export const Root_variants_size_lg = style({ ...tokens.w_12, ...tokens.h_12 });

const LoaderSpinO = keyframes({
	"100%": {
		transform: "rotate(360deg)",
	},
});

export const G = style({
	transformOrigin: "center",
	animation: `${LoaderSpinO} 2s linear infinite`,
});

const LoaderSpinI = keyframes({
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
	animation: `${LoaderSpinI} 1.5s ease-in-out infinite`,
});
