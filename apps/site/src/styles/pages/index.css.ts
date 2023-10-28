import { style } from "@vanilla-extract/css";

import { SCREEN } from "@flamrdevs/ui/core/.sprinkles.css.ts";

const flamrdevssvg = style({
	width: "10rem",
	height: "10rem",

	"@media": {
		[`(min-width: ${SCREEN.xs})`]: {
			width: "17rem",
			height: "17rem",
		},
		[`(min-width: ${SCREEN.sm})`]: {
			width: "24rem",
			height: "24rem",
		},
		[`(min-width: ${SCREEN.md})`]: {
			width: "31rem",
			height: "31rem",
		},
		[`(min-width: ${SCREEN.lg})`]: {
			width: "38rem",
			height: "38rem",
		},
		[`(min-width: ${SCREEN.xl})`]: {
			width: "45rem",
			height: "45rem",
		},
	},
});

const separatorvertical = style({
	height: "1.5rem !important",
});

export { flamrdevssvg, separatorvertical };
