import { style } from "@vanilla-extract/css";

import * as contract from "./contract.css.ts";
import * as tokens from "./tokens.ts";
import * as vars from "./variables.css.ts";

export const varsNeutral = style({
	vars: {
		[vars.v_a_1]: contract.colors.cn[1],
		[vars.v_a_2]: contract.colors.cn[2],
		[vars.v_a_3]: contract.colors.cn[3],
		[vars.v_a_4]: contract.colors.cn[4],
		[vars.v_a_5]: contract.colors.cn[5],
		[vars.v_a_6]: contract.colors.cn[6],
		[vars.v_a_7]: contract.colors.cn[7],
		[vars.v_a_8]: contract.colors.cn[8],
		[vars.v_a_9]: contract.colors.cn[9],
		[vars.v_a_10]: contract.colors.cn[10],
		[vars.v_a_11]: contract.colors.cn[11],
		[vars.v_a_12]: contract.colors.cn[12],
	},
});

export const varsPrimary = style({
	vars: {
		[vars.v_a_1]: contract.colors.cp[1],
		[vars.v_a_2]: contract.colors.cp[2],
		[vars.v_a_3]: contract.colors.cp[3],
		[vars.v_a_4]: contract.colors.cp[4],
		[vars.v_a_5]: contract.colors.cp[5],
		[vars.v_a_6]: contract.colors.cp[6],
		[vars.v_a_7]: contract.colors.cp[7],
		[vars.v_a_8]: contract.colors.cp[8],
		[vars.v_a_9]: contract.colors.cp[9],
		[vars.v_a_10]: contract.colors.cp[10],
		[vars.v_a_11]: contract.colors.cp[11],
		[vars.v_a_12]: contract.colors.cp[12],
	},
});

export const varsSuccess = style({
	vars: {
		[vars.v_a_1]: contract.colors.cs[1],
		[vars.v_a_2]: contract.colors.cs[2],
		[vars.v_a_3]: contract.colors.cs[3],
		[vars.v_a_4]: contract.colors.cs[4],
		[vars.v_a_5]: contract.colors.cs[5],
		[vars.v_a_6]: contract.colors.cs[6],
		[vars.v_a_7]: contract.colors.cs[7],
		[vars.v_a_8]: contract.colors.cs[8],
		[vars.v_a_9]: contract.colors.cs[9],
		[vars.v_a_10]: contract.colors.cs[10],
		[vars.v_a_11]: contract.colors.cs[11],
		[vars.v_a_12]: contract.colors.cs[12],
	},
});

export const varsInfo = style({
	vars: {
		[vars.v_a_1]: contract.colors.ci[1],
		[vars.v_a_2]: contract.colors.ci[2],
		[vars.v_a_3]: contract.colors.ci[3],
		[vars.v_a_4]: contract.colors.ci[4],
		[vars.v_a_5]: contract.colors.ci[5],
		[vars.v_a_6]: contract.colors.ci[6],
		[vars.v_a_7]: contract.colors.ci[7],
		[vars.v_a_8]: contract.colors.ci[8],
		[vars.v_a_9]: contract.colors.ci[9],
		[vars.v_a_10]: contract.colors.ci[10],
		[vars.v_a_11]: contract.colors.ci[11],
		[vars.v_a_12]: contract.colors.ci[12],
	},
});

export const varsWarning = style({
	vars: {
		[vars.v_a_1]: contract.colors.cw[1],
		[vars.v_a_2]: contract.colors.cw[2],
		[vars.v_a_3]: contract.colors.cw[3],
		[vars.v_a_4]: contract.colors.cw[4],
		[vars.v_a_5]: contract.colors.cw[5],
		[vars.v_a_6]: contract.colors.cw[6],
		[vars.v_a_7]: contract.colors.cw[7],
		[vars.v_a_8]: contract.colors.cw[8],
		[vars.v_a_9]: contract.colors.cw[9],
		[vars.v_a_10]: contract.colors.cw[10],
		[vars.v_a_11]: contract.colors.cw[11],
		[vars.v_a_12]: contract.colors.cw[12],
	},
});

export const varsDanger = style({
	vars: {
		[vars.v_a_1]: contract.colors.cd[1],
		[vars.v_a_2]: contract.colors.cd[2],
		[vars.v_a_3]: contract.colors.cd[3],
		[vars.v_a_4]: contract.colors.cd[4],
		[vars.v_a_5]: contract.colors.cd[5],
		[vars.v_a_6]: contract.colors.cd[6],
		[vars.v_a_7]: contract.colors.cd[7],
		[vars.v_a_8]: contract.colors.cd[8],
		[vars.v_a_9]: contract.colors.cd[9],
		[vars.v_a_10]: contract.colors.cd[10],
		[vars.v_a_11]: contract.colors.cd[11],
		[vars.v_a_12]: contract.colors.cd[12],
	},
});

export const filterNoiseLayer = style({
	"::after": {
		content: "",
		zIndex: 10,
		inset: 0,
		...tokens.block,
		...tokens.absolute,
		...tokens.overflow_hidden,
		...tokens.opacity_10,
		background: `linear-gradient(to bottom, #2222221a, #1111111a), ${vars.filter_noise_svg}`,
	},
});
