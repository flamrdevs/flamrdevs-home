import { Link } from "@flamrdevs/x-solid/modules/router";
import type { LinkProps } from "@flamrdevs/x-solid/modules/router";

import IconButton from "./../core/IconButton";
import type { IconButtonProps } from "./../core/IconButton";

type IconButtonLinkProps = LinkProps & Omit<IconButtonProps, "as" | "asChild">;

const IconButtonLink = (props: IconButtonLinkProps) => <IconButton<LinkProps> {...props} as={Link} />;

export type { IconButtonLinkProps };
export default IconButtonLink;
