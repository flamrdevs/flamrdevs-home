import { style } from "@vanilla-extract/css";

import * as tokens from "../../styles/tokens.ts";

export const Root_variants_size_sm = style({
	...tokens.w_6,
	...tokens.h_6,
	...tokens.p_px,
	...tokens.text_z2,
	...tokens.font_w4,
});

export const Root_variants_size_md = style({
	...tokens.w_8,
	...tokens.h_8,
	...tokens.p_0_5,
	...tokens.text_z3,
	...tokens.font_w5,
});

export const Root_variants_size_lg = style({
	...tokens.w_10,
	...tokens.h_10,
	...tokens.p_1,
	...tokens.text_z4,
	...tokens.font_w5,
});
