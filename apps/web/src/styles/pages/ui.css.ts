import { style } from "@vanilla-extract/css";

import { ColorsContract } from "@flamrdevs/ui/core/styles/contract.css";

const box = style({
	width: "3rem",
	height: "3rem",
});

const color = {
	neutral: {
		1: style([box, { backgroundColor: ColorsContract.neutral[1] }]),
		2: style([box, { backgroundColor: ColorsContract.neutral[2] }]),
		3: style([box, { backgroundColor: ColorsContract.neutral[3] }]),
		4: style([box, { backgroundColor: ColorsContract.neutral[4] }]),
		5: style([box, { backgroundColor: ColorsContract.neutral[5] }]),
		6: style([box, { backgroundColor: ColorsContract.neutral[6] }]),
		7: style([box, { backgroundColor: ColorsContract.neutral[7] }]),
		8: style([box, { backgroundColor: ColorsContract.neutral[8] }]),
		9: style([box, { backgroundColor: ColorsContract.neutral[9] }]),
		10: style([box, { backgroundColor: ColorsContract.neutral[10] }]),
		11: style([box, { backgroundColor: ColorsContract.neutral[11] }]),
		12: style([box, { backgroundColor: ColorsContract.neutral[12] }]),
	},
	primary: {
		1: style([box, { backgroundColor: ColorsContract.primary[1] }]),
		2: style([box, { backgroundColor: ColorsContract.primary[2] }]),
		3: style([box, { backgroundColor: ColorsContract.primary[3] }]),
		4: style([box, { backgroundColor: ColorsContract.primary[4] }]),
		5: style([box, { backgroundColor: ColorsContract.primary[5] }]),
		6: style([box, { backgroundColor: ColorsContract.primary[6] }]),
		7: style([box, { backgroundColor: ColorsContract.primary[7] }]),
		8: style([box, { backgroundColor: ColorsContract.primary[8] }]),
		9: style([box, { backgroundColor: ColorsContract.primary[9] }]),
		10: style([box, { backgroundColor: ColorsContract.primary[10] }]),
		11: style([box, { backgroundColor: ColorsContract.primary[11] }]),
		12: style([box, { backgroundColor: ColorsContract.primary[12] }]),
	},
	success: {
		1: style([box, { backgroundColor: ColorsContract.success[1] }]),
		2: style([box, { backgroundColor: ColorsContract.success[2] }]),
		3: style([box, { backgroundColor: ColorsContract.success[3] }]),
		4: style([box, { backgroundColor: ColorsContract.success[4] }]),
		5: style([box, { backgroundColor: ColorsContract.success[5] }]),
		6: style([box, { backgroundColor: ColorsContract.success[6] }]),
		7: style([box, { backgroundColor: ColorsContract.success[7] }]),
		8: style([box, { backgroundColor: ColorsContract.success[8] }]),
		9: style([box, { backgroundColor: ColorsContract.success[9] }]),
		10: style([box, { backgroundColor: ColorsContract.success[10] }]),
		11: style([box, { backgroundColor: ColorsContract.success[11] }]),
		12: style([box, { backgroundColor: ColorsContract.success[12] }]),
	},
	info: {
		1: style([box, { backgroundColor: ColorsContract.info[1] }]),
		2: style([box, { backgroundColor: ColorsContract.info[2] }]),
		3: style([box, { backgroundColor: ColorsContract.info[3] }]),
		4: style([box, { backgroundColor: ColorsContract.info[4] }]),
		5: style([box, { backgroundColor: ColorsContract.info[5] }]),
		6: style([box, { backgroundColor: ColorsContract.info[6] }]),
		7: style([box, { backgroundColor: ColorsContract.info[7] }]),
		8: style([box, { backgroundColor: ColorsContract.info[8] }]),
		9: style([box, { backgroundColor: ColorsContract.info[9] }]),
		10: style([box, { backgroundColor: ColorsContract.info[10] }]),
		11: style([box, { backgroundColor: ColorsContract.info[11] }]),
		12: style([box, { backgroundColor: ColorsContract.info[12] }]),
	},
	warning: {
		1: style([box, { backgroundColor: ColorsContract.warning[1] }]),
		2: style([box, { backgroundColor: ColorsContract.warning[2] }]),
		3: style([box, { backgroundColor: ColorsContract.warning[3] }]),
		4: style([box, { backgroundColor: ColorsContract.warning[4] }]),
		5: style([box, { backgroundColor: ColorsContract.warning[5] }]),
		6: style([box, { backgroundColor: ColorsContract.warning[6] }]),
		7: style([box, { backgroundColor: ColorsContract.warning[7] }]),
		8: style([box, { backgroundColor: ColorsContract.warning[8] }]),
		9: style([box, { backgroundColor: ColorsContract.warning[9] }]),
		10: style([box, { backgroundColor: ColorsContract.warning[10] }]),
		11: style([box, { backgroundColor: ColorsContract.warning[11] }]),
		12: style([box, { backgroundColor: ColorsContract.warning[12] }]),
	},
	danger: {
		1: style([box, { backgroundColor: ColorsContract.danger[1] }]),
		2: style([box, { backgroundColor: ColorsContract.danger[2] }]),
		3: style([box, { backgroundColor: ColorsContract.danger[3] }]),
		4: style([box, { backgroundColor: ColorsContract.danger[4] }]),
		5: style([box, { backgroundColor: ColorsContract.danger[5] }]),
		6: style([box, { backgroundColor: ColorsContract.danger[6] }]),
		7: style([box, { backgroundColor: ColorsContract.danger[7] }]),
		8: style([box, { backgroundColor: ColorsContract.danger[8] }]),
		9: style([box, { backgroundColor: ColorsContract.danger[9] }]),
		10: style([box, { backgroundColor: ColorsContract.danger[10] }]),
		11: style([box, { backgroundColor: ColorsContract.danger[11] }]),
		12: style([box, { backgroundColor: ColorsContract.danger[12] }]),
	},
};

export { color };
