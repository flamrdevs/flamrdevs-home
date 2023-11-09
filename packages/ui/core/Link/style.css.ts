import { style } from "@vanilla-extract/css";

import * as contract from "../../styles/contract.css.ts";
import * as tokens from "../../styles/tokens.ts";

import * as SharedStyle from "../_/shared.style.css.ts";

const Root = style([
	{
		...tokens.p_px,
		...tokens.text_ci_9,
		...tokens.font_w6,
		...tokens.outline_offset_1,
		...tokens.rounded_4,

		":hover": {
			textDecorationLine: "underline",
		},

		":focus-visible": {
			outlineColor: contract.colors.ci[10],
		},

		selectors: {
			"&[data-disabled]": {
				textDecorationLine: "none",
				...tokens.cursor_not_allowed,
				...tokens.text_ci_8,
			},
		},
	},
	SharedStyle.Outline1pxSolidTransparent,
]);

export { Root };
