type SeparatorOptions = {
	orientation?: "horizontal" | "vertical";
};
type SeparatorAttrs = {
	"data-orientation"?: "horizontal" | "vertical";
};
const getSeparatorAttrs = ({ orientation = "horizontal" }: SeparatorOptions) => {
	const result: SeparatorAttrs = { "data-orientation": orientation };

	return result;
};

export type { SeparatorOptions, SeparatorAttrs };
export { getSeparatorAttrs };
