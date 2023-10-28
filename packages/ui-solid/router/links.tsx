import { Link as RouterLink } from "@flamrdevs/x-solid/modules/router.ts";
import type { LinkProps as RouterLinkProps } from "@flamrdevs/x-solid/modules/router.ts";

import { Button, IconButton } from "./../core/buttons.tsx";
import type { ButtonOptions, IconButtonOptions } from "./../core/buttons.tsx";

import { Link as CoreLink } from "./../core/navigations.tsx";
import type { LinkOptions as CoreLinkOptions } from "./../core/navigations.tsx";

const ButtonLink = (props: RouterLinkProps & ButtonOptions) => <Button {...props} as={RouterLink} />;

const IconButtonLink = (props: RouterLinkProps & IconButtonOptions) => <IconButton {...props} as={RouterLink} />;

const Link = (props: RouterLinkProps & CoreLinkOptions) => <CoreLink {...props} as={RouterLink} />;

export { ButtonLink, IconButtonLink, Link };
