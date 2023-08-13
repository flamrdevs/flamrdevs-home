type ButtonOptions = {
	disabled?: boolean;
};
type ButtonAttrs = ButtonOptions & {
	"data-disabled"?: boolean;
};
const getButtonAttrs = (options: ButtonOptions) => {
	const result: ButtonAttrs = { ...options };

	if (options.disabled) result["data-disabled"] = true;

	return result;
};

export type { ButtonOptions, ButtonAttrs };
export { getButtonAttrs };
