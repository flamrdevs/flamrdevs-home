import { style } from "@vanilla-extract/css";

import { SCREEN } from "@flamrdevs/ui/core/_/sprinkles.css.ts";

const flamrdevssvg = style({
	width: "12rem",
	height: "12rem",

	"@media": {
		[`(min-width: ${SCREEN.sm})`]: {
			width: "20rem",
			height: "20rem",
		},
		[`(min-width: ${SCREEN.md})`]: {
			width: "28rem",
			height: "28rem",
		},
		[`(min-width: ${SCREEN.lg})`]: {
			width: "36rem",
			height: "36rem",
		},
	},
});

export { flamrdevssvg };
