import { style } from "@vanilla-extract/css";

import * as tokens from "./../styles/tokens.ts";

const Root = style({
	...tokens.flex,
	...tokens.gap_2,
	...tokens.flex_col,
	...tokens.w_64,
});

const Container = style({
	...tokens.flex,
	...tokens.ai_center,
	...tokens.jc_between,
});

const Label = style({
	...tokens.text_cn_12,
	...tokens.text_z2,
});

const Track = style({
	...tokens.h_2_5,
	...tokens.bg_cn_3,
	...tokens.rounded_4,
});

const Fill = style({
	...tokens.h_full,
	...tokens.bg_va_9,
	...tokens.rounded_4,
	width: "var(--kb-progress-fill-width)",
});

export { Root, Container, Label, Track, Fill };
