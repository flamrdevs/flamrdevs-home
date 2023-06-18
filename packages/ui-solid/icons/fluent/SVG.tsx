import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import clsx from "@flamrdevs/x/modules/clsx";

type SVGProps = JSX.IntrinsicElements["svg"];

type SVGIconProps = Omit<JSX.IntrinsicElements["svg"], "children">;

const SVG = (props: SVGProps) => {
	const [classes, rest] = splitProps(props, ["class", "classList"]);

	const className = () => clsx("fluent-icon", classes.class, classes.classList);

	return <svg {...rest} class={className()} width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />;
};

export type { SVGProps, SVGIconProps };
export default SVG;
