import clsx from "@flamrdevs/x/modules/clsx";
import type { ClassValue } from "@flamrdevs/x/modules/clsx";

type ClassesProps = {
	class?: string | null;
	"class:list"?: string | Record<string, boolean> | Record<any, any> | Iterable<string> | Iterable<any>;
};

const getRootClassesx = <P extends ClassesProps>(props: P) => {
	const { class: className, "class:list": classList, ...rest } = props;
	return [(...classes: ClassValue[]) => clsx(classes, className, classList), rest] as const;
};

type ButtonOptions = {
	disabled?: boolean;
};
type ButtonAttrs = {
	disabled?: boolean;
	"data-disabled"?: "";
};
const getButtonAttrs = (options: ButtonOptions) => {
	const result: ButtonAttrs = {};

	if (options.disabled) {
		result["data-disabled"] = "";
	}

	return result;
};

type LinkOptions = {
	disabled?: boolean;
};
type LinkAttrs = {
	disabled?: boolean;
	"data-disabled"?: "";
};
const getLinkAttrs = (options: LinkOptions) => {
	const result: LinkAttrs = {};

	if (options.disabled) {
		result["data-disabled"] = "";
	}

	return result;
};

type SeparatorOptions = {
	orientation?: "horizontal" | "vertical";
};
type SeparatorAttrs = {
	"data-orientation"?: "horizontal" | "vertical";
};
const getSeparatorAttrs = ({ orientation = "horizontal" }: SeparatorOptions) => {
	return {
		"data-orientation": orientation,
	} as SeparatorAttrs;
};

export type { ClassesProps, ButtonOptions, LinkOptions, SeparatorOptions };
export { getRootClassesx };
export { getButtonAttrs, getLinkAttrs, getSeparatorAttrs };
