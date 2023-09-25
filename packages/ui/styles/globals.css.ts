import { globalStyle } from "@vanilla-extract/css";

import { SANS } from "./fonts";

import { ColorsContract } from "./contract.css";
import * as COLORS from "./colors";

globalStyle("html", {
	WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
	backgroundColor: ColorsContract.neutral[1],
	color: ColorsContract.neutral[12],
	fontFamily: SANS,
});

globalStyle("::-webkit-scrollbar", {
	width: "0.4rem",
});

globalStyle("::-webkit-scrollbar-track", {
	background: `${ColorsContract.neutral[5]}88`,
});

globalStyle("::-webkit-scrollbar-thumb", {
	background: ColorsContract.neutral[5],
});

globalStyle("::-webkit-scrollbar-thumb:hover", {
	background: ColorsContract.neutral[8],
});

globalStyle("::-moz-selection", {
	background: ColorsContract.info[9],
	color: COLORS.WHITE.DEFAULT,
});

globalStyle("::selection", {
	background: ColorsContract.info[9],
	color: COLORS.WHITE.DEFAULT,
});

globalStyle("a", {
	textDecorationLine: "none",
});

globalStyle(".lucide", {
	strokeWidth: 1.5,
	width: "1.25rem",
	height: "1.25rem",
});
