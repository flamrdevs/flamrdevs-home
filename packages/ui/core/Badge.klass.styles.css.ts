import { style } from "@vanilla-extract/css";

import * as tokens from "./../styles/tokens.ts";
import * as vars from "./../styles/variables.css.ts";
import * as styles from "../styles/styles.css.ts";

import * as SharedStyle from "./_shared.style.css.ts";

export const Root_base = style([
	{
		vars: {
			[vars.xpg]: `${vars.v_a_3}, ${vars.v_a_2}`,
			[vars.xbg]: `${vars.v_a_9}, ${vars.v_a_6}`,
		},
		...tokens.inline_flex,
		...tokens.relative,
		...tokens.ai_center,
		...tokens.jc_center,
		...tokens.select_none,
		...tokens.rounded_7,
		...tokens.text_va_11,
		background: `padding-box linear-gradient(125deg, ${vars.xpg}), border-box linear-gradient(125deg, ${vars.xbg})`,

		"::after": tokens.rounded_7,
	},
	SharedStyle.Border1pxSolidTransparent,
	styles.filterNoiseLayer,
]);

export const Root_variants_size_md = style({
	...tokens.h_4,
	...tokens.px_1,
	...tokens.text_z1,
	...tokens.font_w3,
});
