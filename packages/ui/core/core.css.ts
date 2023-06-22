import { componentStateStyles } from "@kobalte/vanilla-extract";

import { ColorsContract } from "./styles/contract.css";

const buttonDisabledStyles = componentStateStyles({
	disabled: {
		opacity: 0.8,
		pointerEvents: "none",
	},
});

const colorNeutralDisabledStyles = componentStateStyles({
	disabled: {
		color: ColorsContract.neutral[8],
	},
});

const colorPrimaryDisabledStyles = componentStateStyles({
	disabled: {
		color: ColorsContract.primary[8],
	},
});

const colorSuccessDisabledStyles = componentStateStyles({
	disabled: {
		color: ColorsContract.success[8],
	},
});

const colorInfoDisabledStyles = componentStateStyles({
	disabled: {
		color: ColorsContract.info[8],
	},
});

const colorWarningDisabledStyles = componentStateStyles({
	disabled: {
		color: ColorsContract.warning[8],
	},
});

const colorDangerDisabledStyles = componentStateStyles({
	disabled: {
		color: ColorsContract.danger[8],
	},
});

export {
	buttonDisabledStyles,
	colorNeutralDisabledStyles,
	colorPrimaryDisabledStyles,
	colorSuccessDisabledStyles,
	colorInfoDisabledStyles,
	colorWarningDisabledStyles,
	colorDangerDisabledStyles,
};
