import { style } from "@vanilla-extract/css";

import { SCREEN } from "@flamrdevs/ui/core/sprinkles.css";

const flamrdevssvg = style({
	width: "10rem",
	height: "10rem",

	"@media": {
		[`(min-width: ${SCREEN.xs})`]: {
			width: "15rem",
			height: "15rem",
		},
		[`(min-width: ${SCREEN.sm})`]: {
			width: "20rem",
			height: "20rem",
		},
		[`(min-width: ${SCREEN.md})`]: {
			width: "25rem",
			height: "25rem",
		},
		[`(min-width: ${SCREEN.lg})`]: {
			width: "30rem",
			height: "30rem",
		},
		[`(min-width: ${SCREEN.xl})`]: {
			width: "35rem",
			height: "35rem",
		},
	},
});

export { flamrdevssvg };
