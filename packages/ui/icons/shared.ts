import type { IconName } from "./types.ts";

type ComponentProps = {
	i: IconName;
	size?: string | number;
	width?: string | number;
	height?: string | number;
};

const DEFAULT_ICON = "Github" as const satisfies IconName;
const DEFAULT_SIZE = 20 as const satisfies ComponentProps["size"];
const DEFAULT_CLASS = "" as const satisfies string;

const href = `/icons.svg#i-`;

export type { IconName, ComponentProps };
export { DEFAULT_ICON, DEFAULT_CLASS, DEFAULT_SIZE, href };
