import type { HTMLTag, Polymorphic } from "astro/types";

type As = HTMLTag;

type Props<T extends As, P extends {}> = Polymorphic<{ as: T } & P>;

export type { As, Props };
