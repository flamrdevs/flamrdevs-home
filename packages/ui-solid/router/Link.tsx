import { Link as RouterLink } from "@flamrdevs/x-solid/modules/router";
import type { LinkProps as RouterLinkProps } from "@flamrdevs/x-solid/modules/router";

import CoreLink from "../core/Link";
import type { LinkProps as CoreLinkProps } from "../core/Link";

type LinkProps = RouterLinkProps & Omit<CoreLinkProps, "as" | "asChild">;

const Link = (props: LinkProps) => {
	return <CoreLink<RouterLinkProps> {...props} as={RouterLink} />;
};

export type { LinkProps };
export default Link;
