import { Link } from "@flamrdevs/x-solid/modules/router";
import type { LinkProps } from "@flamrdevs/x-solid/modules/router";

import * as Polymorphic from "./../polymorphic";

import IconButton from "./../core/IconButton";
import type { IconButtonProps } from "./../core/IconButton";

type IconButtonLinkProps = LinkProps & Polymorphic.PropsWithoutAsChild<IconButtonProps>;

const IconButtonLink = (props: IconButtonLinkProps) => <IconButton<typeof Link> {...props} as={Link} />;

export type { IconButtonLinkProps };
export default IconButtonLink;
