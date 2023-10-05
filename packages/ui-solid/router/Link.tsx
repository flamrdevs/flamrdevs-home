import { Link as RouterLink } from "@flamrdevs/x-solid/modules/router";
import type { LinkProps as RouterLinkProps } from "@flamrdevs/x-solid/modules/router";

import * as Polymorphic from "./../polymorphic";

import CoreLink from "./../core/Link";
import type { LinkProps as CoreLinkProps } from "./../core/Link";

type LinkProps = RouterLinkProps & Polymorphic.PropsWithoutAsChild<CoreLinkProps>;

const Link = (props: LinkProps) => <CoreLink<typeof RouterLink> {...props} as={RouterLink} />;

export type { LinkProps };
export default Link;
