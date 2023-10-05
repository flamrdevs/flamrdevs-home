type LinkOptions = {
	disabled?: boolean;
};
type LinkAttrs = LinkOptions & {
	tabindex?: number;
};
const getLinkAttrs = (options: LinkOptions) => {
	const result: LinkAttrs = { ...options };

	if (options.disabled) {
		result.tabindex = -1;
	}

	return result;
};

export type { LinkOptions, LinkAttrs };
export { getLinkAttrs };
