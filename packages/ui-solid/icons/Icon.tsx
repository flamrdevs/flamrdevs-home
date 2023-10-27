import { mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { DEFAULT_ICON, DEFAULT_SIZE, DEFAULT_CLASS, href, type IconProps } from "@flamrdevs/ui/icons/shared";

const LOCAL_SPLITTER = ["i", "class", "size"] as const;

const DIMENSION_SPLITTER = ["width", "height"] as const;

const DEFAULT_LOCAL_PROPS = {
	i: DEFAULT_ICON,
	size: DEFAULT_SIZE,
	class: DEFAULT_CLASS,
} satisfies IconProps & {
	class: string;
};

const Icon = (props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, keyof IconProps> & IconProps) => {
	const [local, dimension, other] = splitProps(mergeProps(DEFAULT_LOCAL_PROPS, props), LOCAL_SPLITTER, DIMENSION_SPLITTER);

	return (
		<svg
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...mergeProps({ width: local.size, height: local.size } satisfies { [K in (typeof DIMENSION_SPLITTER)[number]]?: string | number }, dimension)}
			{...other}
			class={`lucide ${local.class}`}
		>
			<use href={`${href}${local.i}`} />
		</svg>
	);
};

export default Icon;
