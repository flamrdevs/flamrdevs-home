import { A as RouterA } from "@flamrdevs/x-solid/modules/router.ts";
import type { AnchorProps as RouterAnchorProps } from "@flamrdevs/x-solid/modules/router.ts";

import { Button, IconButton } from "./../core/buttons.tsx";
import type { ButtonOptions, IconButtonOptions } from "./../core/buttons.tsx";

import { Link as CoreLink } from "./../core/navigations.tsx";
import type { LinkOptions as CoreLinkOptions } from "./../core/navigations.tsx";

const ButtonLink = (props: RouterAnchorProps & ButtonOptions) => <Button {...props} as={RouterA} />;

const IconButtonLink = (props: RouterAnchorProps & IconButtonOptions) => <IconButton {...props} as={RouterA} />;

const Link = (props: RouterAnchorProps & CoreLinkOptions) => <CoreLink {...props} as={RouterA} />;

export { ButtonLink, IconButtonLink, Link };
