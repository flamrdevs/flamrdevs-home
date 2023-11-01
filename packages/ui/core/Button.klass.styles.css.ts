import { style } from "@vanilla-extract/css";

import * as tokens from "./../styles/tokens.ts";

export const Root_variants_size_sm = style({
	...tokens.h_6,
	...tokens.px_3,
	...tokens.py_px,
	...tokens.text_z2,
	...tokens.font_w4,
});

export const Root_variants_size_md = style({
	...tokens.h_8,
	...tokens.px_4,
	...tokens.py_0_5,
	...tokens.text_z3,
	...tokens.font_w5,
});

export const Root_variants_size_lg = style({
	...tokens.h_10,
	...tokens.px_5,
	...tokens.py_1,
	...tokens.text_z4,
	...tokens.font_w5,
});
