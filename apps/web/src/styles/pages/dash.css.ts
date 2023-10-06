import { style } from "@vanilla-extract/css";

import { ColorsContract } from "@flamrdevs/ui/styles/contract.css";

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
	backgroundColor: ColorsContract.neutral[1],
});

const main = style({
	flexGrow: 1,
	backgroundColor: ColorsContract.neutral[1],
});

export { container, nav, main };
