import { style } from "@vanilla-extract/css";

import * as contract from "../../styles/contract.css.ts";
import * as tokens from "../../styles/tokens.ts";
import * as vars from "../../styles/variables.css.ts";

export const Root_base = style({
	vars: {
		[vars.l_mb]: "auto",
		[vars.l_mi]: "auto",
	},
	...tokens.block,
	...tokens.border_none,
	...tokens.border_0,
	borderRadius: "100%",
	backgroundImage: `linear-gradient(${vars.l_lg_deg}, ${contract.colors.cn[3]}, ${contract.colors.cn[6]}, ${contract.colors.cn[3]})`,

	selectors: {
		[`&[data-orientation="horizontal"]`]: {
			vars: { [vars.l_lg_deg]: "90deg" },
			marginBlock: vars.l_mb,
			...tokens.w_full,
			...tokens.h_px,
		},
		[`&[data-orientation="vertical"]`]: {
			vars: { [vars.l_lg_deg]: "0deg" },
			marginInline: vars.l_mi,
			...tokens.w_px,
			...tokens.h_full,
		},
	},
});

export const Root_variants_margin_0 = style({ vars: { [vars.l_mb]: "0", [vars.l_mi]: "0" } });
export const Root_variants_margin_1 = style({ vars: { [vars.l_mb]: "0.5rem", [vars.l_mi]: "0.5rem" } });
export const Root_variants_margin_2 = style({ vars: { [vars.l_mb]: "1rem", [vars.l_mi]: "1rem" } });
export const Root_variants_margin_3 = style({ vars: { [vars.l_mb]: "1.5rem", [vars.l_mi]: "1.5rem" } });
export const Root_variants_margin_4 = style({ vars: { [vars.l_mb]: "2rem", [vars.l_mi]: "2rem" } });
