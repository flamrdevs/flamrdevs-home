import { style } from "@vanilla-extract/css";

import * as contract from "./../styles/contract.css.ts";
import * as tokens from "./../styles/tokens.ts";
import * as vars from "./../styles/variables.css.ts";
import * as styles from "../styles/styles.css.ts";

import * as SharedStyle from "./_shared.style.css.ts";

const Root = style([
	{
		vars: {
			[vars.xpg]: `${vars.v_a_3}, ${vars.v_a_2}`,
			[vars.xbg]: `${vars.v_a_9}, ${vars.v_a_7}, ${vars.v_a_6}`,
		},
		...tokens.inline_flex,
		...tokens.relative,
		...tokens.ai_center,
		...tokens.jc_center,
		...tokens.select_none,
		...tokens.cursor_pointer,
		...tokens.rounded_8,
		...tokens.outline_offset_2,
		...tokens.text_va_11,
		background: `padding-box linear-gradient(125deg, ${vars.xpg}), border-box linear-gradient(125deg, ${vars.xbg})`,

		":hover": {
			vars: {
				[vars.xpg]: `${vars.v_a_4}, ${vars.v_a_2}`,
				[vars.xbg]: `${vars.v_a_10}, ${vars.v_a_8}, ${vars.v_a_7}`,
			},
		},

		":focus-visible": {
			outlineColor: vars.v_a_11,
		},

		":active": {
			vars: {
				[vars.xpg]: `${vars.v_a_5}, ${vars.v_a_3}`,
				[vars.xbg]: `${vars.v_a_11}, ${vars.v_a_9}, ${vars.v_a_8}`,
			},
		},

		"::after": tokens.rounded_8,

		selectors: {
			"&[data-disabled]": {
				vars: {
					[vars.xpg]: `${contract.colors.cn[2]}, ${contract.colors.cn[1]}`,
					[vars.xbg]: `${contract.colors.cn[5]}, ${contract.colors.cn[4]}, ${contract.colors.cn[3]}`,
				},
				...tokens.text_cn_8,
				...tokens.pointer_events_none,
			},
		},
	},
	SharedStyle.Border1pxSolidTransparent,
	SharedStyle.Outline1pxSolidTransparent,
	styles.filterNoiseLayer,
]);

export { Root };
