import { mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as CSS from "@flamrdevs/ui/flamrdevs/AnimatedSVGLogo.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { ClassesKeys } from "./../classes";

type FLAMRDEVS_SVGProps = JSX.IntrinsicElements["svg"] & {
	size?: number;
};

const defaultProps: FLAMRDEVS_SVGProps = {
	size: 500,
};

const FLAMRDEVS_SVG = (props: FLAMRDEVS_SVGProps) => {
	props = mergeProps(defaultProps, props);
	const [classes, local, rest] = splitProps(props, ClassesKeys, ["size"]);

	const className = () => clsx(CSS.Root, classes.class, classes.classList);

	return (
		<svg {...rest} class={className()} width={local.size} height={local.size} viewBox="0 0 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path class={CSS.Filled} d="M443.602 757.087L280.627 708.946L1173.78 243.76L1054.46 478.215L443.602 757.087Z"></path>
			<path
				class={CSS.Filled}
				d="M372.349 1196.15L528.09 773.955L664.365 715.525L652.667 765.791L877.368 645.969L839.705 787.474L617.932 915.041L507.956 1387.59L372.349 1196.15Z"
			></path>
			<path class={CSS.Filled} d="M649.604 1143.95L1107.71 853.595L1174.79 453.849L994.369 601.955L972.324 797.77L707.812 946.304L649.604 1143.95Z"></path>
			<path
				class={CSS.OutlinedBase}
				d="M254.007 675.262L416.983 723.403L1027.84 444.532L1147.16 210.076L254.007 675.262ZM501.471 740.271L345.73 1162.46L481.337 1353.9L637.746 681.842L501.471 740.271ZM626.048 732.107L850.749 612.286L813.086 753.791L591.313 881.358L626.048 732.107ZM681.193 912.621L622.985 1110.27L1081.09 819.911L1148.17 420.166L967.75 568.271L945.705 764.086L681.193 912.621Z"
			></path>
			<path
				class={CSS.Outlined}
				d="M321.672 660.186L484.647 708.327L1095.51 429.455L1214.82 195L321.672 660.186ZM569.135 725.195L413.394 1147.39L549.001 1338.83L705.41 666.765L569.135 725.195ZM693.712 717.031L918.413 597.21L880.75 738.714L658.977 866.282L693.712 717.031ZM748.857 897.544L690.649 1095.19L1148.75 804.835L1215.84 405.09L1035.41 553.195L1013.37 749.01L748.857 897.544Z"
			></path>
		</svg>
	);
};

export type { FLAMRDEVS_SVGProps };
export default FLAMRDEVS_SVG;
