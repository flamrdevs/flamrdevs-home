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

export { buttonDisabledStyles, colorNeutralDisabledStyles };
