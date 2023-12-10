import { globalStyle } from "@vanilla-extract/css";

import { HOST } from "@flamrdevs/utils/exports.ts";

import * as contract from "./contract.css.ts";
import * as tokens from "./../styles/tokens.ts";
import * as vars from "./variables.css.ts";

globalStyle(":root", {
	vars: {
		[vars.filter_noise_svg]: `url(${HOST.STATIC("svgs/filter-noise.svg")})`,
	},
});

globalStyle("html", {
	WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
	...tokens.bg_cn_1,
	...tokens.text_cn_12,
	...tokens.font_sans,
});

globalStyle("::-webkit-scrollbar", {
	width: "0.4rem",
});

globalStyle("::-webkit-scrollbar-track", {
	background: `${contract.colors.cn[5]}88`,
});

globalStyle("::-webkit-scrollbar-thumb", {
	background: contract.colors.cn[5],
});

globalStyle("::-webkit-scrollbar-thumb:hover", {
	background: contract.colors.cn[8],
});

globalStyle("::-moz-selection", {
	...tokens.text_white,
	background: contract.colors.ci[9],
});

globalStyle("::selection", {
	...tokens.text_white,
	background: contract.colors.ci[9],
});

globalStyle("a", {
	textDecorationLine: "none",
});

globalStyle("svg[lucide]", {
	fill: "none",
	strokeWidth: 1.5,
	strokeLinecap: "round",
	strokeLinejoin: "round",
});
