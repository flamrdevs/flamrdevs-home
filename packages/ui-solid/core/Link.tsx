import { splitProps } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import { Link as KobalteLink } from "@kobalte/core";

import * as LinkCSS from "@flamrdevs/ui/core/Link.style.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { splitter } from "./core";
import type { ClassesProps } from "./core";

type LinkProps = KobalteLink.LinkRootOptions;

const Link = <P extends ParentProps<ClassesProps> = JSX.IntrinsicElements["a"]>(props: P & LinkProps) => {
	const [classes, rest] = splitProps(props as ParentProps<ClassesProps> & LinkProps, splitter.classes);

	const className = () => clsx(LinkCSS.Root, classes.class, classes.classList);

	return <KobalteLink.Root {...rest} class={className()} />;
};

export type { LinkProps };
export default Link;
