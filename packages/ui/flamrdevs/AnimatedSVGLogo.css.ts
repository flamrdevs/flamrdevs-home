import { keyframes, style } from "@vanilla-extract/css";

import { ColorsContract } from "./../styles/contract.css";

const Right = keyframes({
	"0%": {
		strokeDashoffset: -2400,
	},
	"100%": {
		strokeDashoffset: 2400,
	},
});

const Left = keyframes({
	"0%": {
		strokeDashoffset: 2400,
	},
	"100%": {
		strokeDashoffset: -2400,
	},
});

const Root = style({
	opacity: 0.2,
});

const Filled = style({
	fill: ColorsContract.neutral[12],
	stroke: ColorsContract.neutral[1],
	strokeWidth: 6,
	strokeDasharray: 2400,
	strokeDashoffset: 2400,
	animation: `${Right} 8000ms infinite cubic-bezier(.5,0,.5,1)`,
	transition: "fill 200ms, stroke 200ms",
});

const Outlined = style({
	stroke: ColorsContract.neutral[12],
	strokeWidth: 3,
	strokeDasharray: 2400,
	strokeDashoffset: 2400,
	animation: `${Right} 4000ms infinite cubic-bezier(.5,0,.5,1)`,
	transition: "stroke 200ms",
});

const OutlinedBase = style({
	stroke: ColorsContract.neutral[1],
	strokeWidth: 3,
	strokeDasharray: 2400,
	strokeDashoffset: 2400,
	animation: `${Left} 2000ms infinite cubic-bezier(.5,0,.5,1)`,
	transition: "stroke 200ms",
});

export { Root, Filled, Outlined, OutlinedBase };
