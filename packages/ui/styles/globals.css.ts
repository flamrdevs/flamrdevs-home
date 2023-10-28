import { globalStyle } from "@vanilla-extract/css";

import { HOST } from "@flamrdevs/utils/exports.ts";

import { SANS } from "./fonts/index.ts";

import { ColorsContract } from "./contract.css.ts";
import * as COLORS from "./colors/index.ts";
import * as vars from "./variables.css.ts";

globalStyle(":root", {
	vars: {
		[vars.filter_noise_svg]: `url(${HOST.STATIC("svgs/filter-noise.svg")})`,
		[vars.default_filter_noise_background]: `linear-gradient(to bottom, #2222221a, #1111111a), ${vars.filter_noise_svg}`,
	},
});

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
	fill: "none",
	strokeWidth: 1.5,
	strokeLinecap: "round",
	strokeLinejoin: "round",
});
