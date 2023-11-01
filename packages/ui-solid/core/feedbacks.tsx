import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as LoaderKlass from "@flamrdevs/ui/core/Loader.klass.ts";
import * as klass from "@flamrdevs/ui/core/_klass.ts";

import * as Classes from "../classes.ts";

type LoaderProps = Classes.WithProps<JSX.IntrinsicElements["svg"] & LoaderKlass.Variants & klass.Color6Variants>;

const Loader = (props: LoaderProps) => {
	const [classes, root, color, rest] = splitProps(props, Classes.Keys, LoaderKlass.Root.vk, klass.Color6.vk);

	return (
		<svg {...rest} class={Classes.x([LoaderKlass.Root(root), klass.Color6(color)], classes)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g class={LoaderKlass.GStyle}>
				<circle class={LoaderKlass.CircleStyle} cx="12" cy="12" r="9.5" fill="none" stroke-width="2" />
			</g>
		</svg>
	);
};

export type { LoaderProps };
export { Loader };
