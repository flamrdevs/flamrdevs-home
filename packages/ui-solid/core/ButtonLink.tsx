import type { JSX } from "solid-js";

import Button from "./Button";
import type { ButtonProps } from "./Button";

type ButtonLinkProps = Omit<JSX.IntrinsicElements["a"], "href"> & { href: string } & Omit<ButtonProps, "as" | "asChild">;

const ButtonLink = (props: ButtonLinkProps) => <Button<JSX.IntrinsicElements["a"]> {...props} as="a" />;

export type { ButtonLinkProps };
export default ButtonLink;
