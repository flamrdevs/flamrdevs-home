import { Link } from "@flamrdevs/x-solid/modules/router";
import type { LinkProps } from "@flamrdevs/x-solid/modules/router";

import Button from "../core/Button";
import type { ButtonProps } from "../core/Button";

type ButtonLinkProps = LinkProps & Omit<ButtonProps, "as" | "asChild">;

const ButtonLink = (props: ButtonLinkProps) => {
	return <Button<LinkProps> {...props} as={Link} />;
};

export type { ButtonLinkProps };
export default ButtonLink;
