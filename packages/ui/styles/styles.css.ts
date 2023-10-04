import { style } from "@vanilla-extract/css";

import { ColorsContract } from "./contract.css";
import * as vars from "./variables.css";

export const varsNeutral = style({
	vars: {
		[vars.v_color_1]: ColorsContract.neutral[1],
		[vars.v_color_2]: ColorsContract.neutral[2],
		[vars.v_color_3]: ColorsContract.neutral[3],
		[vars.v_color_4]: ColorsContract.neutral[4],
		[vars.v_color_5]: ColorsContract.neutral[5],
		[vars.v_color_6]: ColorsContract.neutral[6],
		[vars.v_color_7]: ColorsContract.neutral[7],
		[vars.v_color_8]: ColorsContract.neutral[8],
		[vars.v_color_9]: ColorsContract.neutral[9],
		[vars.v_color_10]: ColorsContract.neutral[10],
		[vars.v_color_11]: ColorsContract.neutral[11],
		[vars.v_color_12]: ColorsContract.neutral[12],
	},
});

export const varsPrimary = style({
	vars: {
		[vars.v_color_1]: ColorsContract.primary[1],
		[vars.v_color_2]: ColorsContract.primary[2],
		[vars.v_color_3]: ColorsContract.primary[3],
		[vars.v_color_4]: ColorsContract.primary[4],
		[vars.v_color_5]: ColorsContract.primary[5],
		[vars.v_color_6]: ColorsContract.primary[6],
		[vars.v_color_7]: ColorsContract.primary[7],
		[vars.v_color_8]: ColorsContract.primary[8],
		[vars.v_color_9]: ColorsContract.primary[9],
		[vars.v_color_10]: ColorsContract.primary[10],
		[vars.v_color_11]: ColorsContract.primary[11],
		[vars.v_color_12]: ColorsContract.primary[12],
	},
});
