import { mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";

declare module "solid-js" {
	namespace JSX {
		interface SvgSVGAttributes<T> {
			lucide?: boolean;
		}
	}
}

type IconProps<IconName extends string = string> = JSX.SvgSVGAttributes<SVGSVGElement> & {
	i: IconName;
	size?: string | number;
	width?: string | number;
	height?: string | number;
};

type IconComponent<IconName extends string = string> = (props: IconProps<IconName>) => JSX.Element;

const BASE_HREF = `/icons.lucide.svg#`;

const DEFAULT_SIZE = 20;

const IconKeys = ["i", "size"] as const;

const DimensionKeys = ["width", "height"] as const;

const Icon: IconComponent = (props) => {
	const [local, dimension, other] = splitProps(props, IconKeys, DimensionKeys);

	return (
		<svg
			lucide
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...mergeProps(
				{
					width: local.size ?? DEFAULT_SIZE,
					height: local.size ?? DEFAULT_SIZE,
				} satisfies { [K in (typeof DimensionKeys)[number]]?: string | number },
				dimension,
				other
			)}
		>
			<use href={`${BASE_HREF}${local.i}`} />
		</svg>
	);
};

export type { IconProps, IconComponent };
export { Icon };
