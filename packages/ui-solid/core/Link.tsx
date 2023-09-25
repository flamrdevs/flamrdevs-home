import { splitProps } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import { Link as KobalteLink } from "@kobalte/core";

import * as LinkCSS from "@flamrdevs/ui/core/Link.style.css";

import { ClassesKeys, classex } from "./../classes";
import type { ClassesProps } from "./../classes";

type LinkProps = KobalteLink.LinkRootOptions;

const Link = <P extends ParentProps<ClassesProps> = JSX.IntrinsicElements["a"]>(props: P & LinkProps) => {
	const [classes, rest] = splitProps(props as ParentProps<ClassesProps> & LinkProps, ClassesKeys);

	const className = () => classex(LinkCSS.Root, classes);

	return <KobalteLink.Root {...rest} class={className()} />;
};

export type { LinkProps };
export default Link;
