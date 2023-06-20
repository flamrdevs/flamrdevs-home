import type { JSX } from "solid-js";

import IconButton from "./IconButton";
import type { IconButtonProps } from "./IconButton";

type IconButtonLinkProps = Omit<JSX.IntrinsicElements["a"], "href"> & { href: string } & Omit<IconButtonProps, "as" | "asChild">;

const IconButtonLink = (props: IconButtonLinkProps) => {
	return <IconButton<JSX.IntrinsicElements["a"]> {...props} as="a" />;
};

export type { IconButtonLinkProps };
export default IconButtonLink;
