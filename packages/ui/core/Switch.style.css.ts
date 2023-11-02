import { globalStyle, style } from "@vanilla-extract/css";

import * as contract from "./../styles/contract.css.ts";
import * as tokens from "./../styles/tokens.ts";
import * as vars from "./../styles/variables.css.ts";
import * as styles from "./../styles/styles.css.ts";

import * as SharedStyle from "./_shared.style.css.ts";

const Root = style({
	...tokens.flex,
});

const Input = style({});

const Control = style([
	{
		vars: {
			[vars.xpg]: `${contract.colors.cn[2]}, ${contract.colors.cn[1]}`,
			[vars.xbg]: `${contract.colors.cn[7]}, ${contract.colors.cn[5]}, ${contract.colors.cn[4]}`,
		},
		...tokens.inline_flex,
		...tokens.relative,
		...tokens.ai_center,
		...tokens.w_11,
		...tokens.h_6,
		...tokens.rounded_12,
		...tokens.outline_offset_2,
		...tokens.transition_colors,
		padding: "0.1875rem",
		background: `padding-box linear-gradient(125deg, ${vars.xpg}), border-box linear-gradient(125deg, ${vars.xbg})`,

		"::after": tokens.rounded_12,

		selectors: {
			"&[data-checked]": {
				vars: {
					[vars.xpg]: `${vars.va_9}, ${vars.va_8}`,
					[vars.xbg]: `${vars.va_11}, ${vars.va_10}, ${vars.va_9}`,
				},
			},

			"&[data-disabled]": {
				vars: {
					[vars.xpg]: `${contract.colors.cn[2]}, ${contract.colors.cn[2]}`,
					[vars.xbg]: `${contract.colors.cn[3]}, ${contract.colors.cn[3]}`,
				},
			},
		},
	},
	SharedStyle.Border1pxSolidTransparent,
	SharedStyle.Outline1pxSolidTransparent,
	styles.filterNoiseLayer,
]);

globalStyle(`${Input}:focus-visible + ${Control}`, {
	outlineColor: contract.colors.cn[11],
});

globalStyle(`${Input}:focus-visible + ${Control}[data-checked]`, {
	outlineColor: vars.va_11,
});

const Thumb = style({
	...tokens.bg_cn_8,
	...tokens.rounded_10,
	...tokens.w_4,
	...tokens.h_4,
	...tokens.transition_transform,

	selectors: {
		"&[data-checked]": {
			...tokens.bg_white,
			transform: "translateX(calc(100% + 0.25rem))",
		},

		"&[data-disabled]": {
			...tokens.bg_cn_6,
		},
	},
});

const Label = style({
	...tokens.flex,
	...tokens.ai_center,
	...tokens.h_6,
	...tokens.ml_2,
	...tokens.text_cn_12,
	...tokens.text_z2,
});

export { Root, Input, Control, Thumb, Label };
