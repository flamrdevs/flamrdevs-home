import { style } from "@vanilla-extract/css";

import * as contract from "@flamrdevs/ui/styles/contract.css.ts";

const container = style({
	top: "50%",
	left: "50%",
	transform: "translateX(-50%) translateY(-50%)",
	aspectRatio: "16/9",
	width: "clamp(64rem, 90%, 80rem)",
	overflow: "hidden",
});

const nav = style({
	flexShrink: 0,
	flexDirection: "column",
	width: "18rem",
	backgroundColor: contract.colors.cn[1],
});

const main = style({
	flexGrow: 1,
	backgroundColor: contract.colors.cn[1],
});

export { container, nav, main };
