import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";

import { Link as KobalteLink } from "@kobalte/core";

import * as LinkCSS from "@flamrdevs/ui/core/Link.style.css";

import { ClassesKeys, classex } from "./../classes";
import * as Polymorphic from "./../polymorphic";

import { getLinkAttrs } from "./attributes/link";
import type { LinkOptions } from "./attributes/link";

type LinkProps = Polymorphic.Props<KobalteLink.LinkRootOptions & LinkOptions>;

const Link = <C extends ValidComponent = typeof KobalteLink.Root>(props: ComponentProps<C> & LinkProps) => {
	const [classes, options, rest] = splitProps(props as ComponentProps<typeof KobalteLink.Root> & LinkProps, ClassesKeys, ["disabled"]);

	const className = () => classex(LinkCSS.Root, classes);

	return <KobalteLink.Root {...rest} class={className()} {...getLinkAttrs(options)} />;
};

export type { LinkProps };
export default Link;
