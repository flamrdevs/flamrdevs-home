import { splitProps } from "solid-js";

import { Link as KobalteLink } from "@kobalte/core";

import * as LinkStyle from "@flamrdevs/ui/core/Link/style.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type LinkOptions = Classes.WithProps<KobalteLink.LinkRootOptions>;

const Link = ((props) => {
	const [classes, rest] = splitProps(props, Classes.Keys);
	return <KobalteLink.Root {...rest} class={Classes.x(LinkStyle.Root, classes)} />;
}) as Polymorphic.Component<typeof KobalteLink.Root, LinkOptions>;

export type { LinkOptions };
export { Link };
