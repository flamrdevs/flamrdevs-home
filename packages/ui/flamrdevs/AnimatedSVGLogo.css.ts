import { keyframes, style } from "@vanilla-extract/css";

import * as contract from "./../styles/contract.css.ts";

const ToRight = keyframes({
	"0%": {
		strokeDashoffset: -270,
	},
	"100%": {
		strokeDashoffset: 270,
	},
});

const ToLeft = keyframes({
	"0%": {
		strokeDashoffset: 270,
	},
	"100%": {
		strokeDashoffset: -270,
	},
});

const Root = style({
	opacity: 0.17,
});

const Filled = style({
	strokeDasharray: 270,
	strokeDashoffset: 270,
	fill: contract.colors.cn[12],
});

const StrokeLeft = style({
	strokeDasharray: 270,
	strokeDashoffset: 270,
	stroke: contract.colors.cn[1],
	strokeWidth: 1.5,
	animation: `${ToLeft} 8000ms infinite ease-in-out`,
	transition: "stroke 100ms",
});

const StrokeRight = style({
	strokeDasharray: 270,
	strokeDashoffset: 270,
	stroke: contract.colors.cn[12],
	strokeWidth: 1.5,
	animation: `${ToRight} 4000ms infinite ease-in-out`,
	transition: "stroke 100ms",
});

export { Root, Filled, StrokeLeft, StrokeRight };
