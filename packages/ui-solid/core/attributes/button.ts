import type { ValidComponent } from "solid-js";

type ButtonOptions = {
	disabled?: boolean;
};
type ButtonAttrs = {
	[K in "role" | "type"]?: "button";
} & ButtonOptions & {
		tabindex?: number;
		"aria-disabled"?: boolean;
	};
const getButtonAttrs = (options: ButtonOptions, tag?: ValidComponent) => {
	const result: ButtonAttrs = { ...options };

	if (options.disabled) {
		result.tabindex = -1;
		result["aria-disabled"] = true;
	}

	if (tag) {
		if (tag !== "button" && tag !== "input") result["role"] = "button";
	}

	return result;
};

export type { ButtonOptions, ButtonAttrs };
export { getButtonAttrs };
