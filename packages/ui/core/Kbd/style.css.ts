import { style } from "@vanilla-extract/css";

import * as tokens from "../../styles/tokens.ts";

const Root = style({
	...tokens.px_2,
	...tokens.py_0_5,
	...tokens.border_1,
	...tokens.border_solid,
	...tokens.border_va_3,
	...tokens.bg_va_2,
	...tokens.font_mono,
	...tokens.font_w5,
	...tokens.text_z3,
	borderBottomWidth: "3px",
	borderBottomRightRadius: "0.25rem",
	borderBottomLeftRadius: "0.25rem",
	borderTopLeftRadius: "0.125rem",
	borderTopRightRadius: "0.125rem",
});

export { Root };
