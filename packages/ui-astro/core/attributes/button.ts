import type { HTMLTag } from "astro/types";

type ButtonOptions = {
	disabled?: boolean;
};
type ButtonAttrs = {
	[K in "role" | "type"]?: "button";
} & ButtonOptions & {
		"data-disabled"?: "";
	};
const getButtonAttrs = (tag: HTMLTag, options: ButtonOptions) => {
	const result: ButtonAttrs = { ...options };

	if (options.disabled) result["data-disabled"] = "";

	result[tag === "button" || tag === "input" ? "type" : "role"] = "button";

	return result;
};

export type { ButtonOptions, ButtonAttrs };
export { getButtonAttrs };
