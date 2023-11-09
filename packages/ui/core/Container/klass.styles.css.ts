import { style } from "@vanilla-extract/css";

import * as tokens from "../../styles/tokens.ts";

import { SCREEN } from "../_/sprinkles.css.ts";

export const Root_base = style({
	...tokens.w_full,
	...tokens.mx_auto,

	"@media": {
		[`(min-width: ${SCREEN.xs})`]: { maxWidth: SCREEN.xs },
		[`(min-width: ${SCREEN.sm})`]: { maxWidth: SCREEN.sm },
		[`(min-width: ${SCREEN.md})`]: { maxWidth: SCREEN.md },
		[`(min-width: ${SCREEN.lg})`]: { maxWidth: SCREEN.lg },
		[`(min-width: ${SCREEN.xl})`]: { maxWidth: SCREEN.xl },
	},
});

export const Root_variants_max_xs = style({ maxWidth: `${SCREEN.xs} !important` });
export const Root_variants_max_sm = style({ maxWidth: `${SCREEN.sm} !important` });
export const Root_variants_max_md = style({ maxWidth: `${SCREEN.md} !important` });
export const Root_variants_max_lg = style({ maxWidth: `${SCREEN.lg} !important` });
export const Root_variants_max_xl = style({ maxWidth: `${SCREEN.xl} !important` });
