import { Link } from "@flamrdevs/x-solid/modules/router";
import type { LinkProps } from "@flamrdevs/x-solid/modules/router";

import * as Polymorphic from "./../polymorphic";

import Button from "./../core/Button";
import type { ButtonProps } from "./../core/Button";

type ButtonLinkProps = LinkProps & Polymorphic.PropsWithoutAsChild<ButtonProps>;

const ButtonLink = (props: ButtonLinkProps) => <Button<typeof Link> {...props} as={Link} />;

export type { ButtonLinkProps };
export default ButtonLink;
