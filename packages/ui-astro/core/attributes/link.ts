type LinkOptions = {
	disabled?: boolean;
};
type LinkAttrs = LinkOptions & {
	"data-disabled"?: boolean;
};
const getLinkAttrs = (options: LinkOptions) => {
	const result: LinkAttrs = { ...options };

	if (options.disabled) result["data-disabled"] = true;

	return result;
};

export type { LinkOptions, LinkAttrs };
export { getLinkAttrs };
