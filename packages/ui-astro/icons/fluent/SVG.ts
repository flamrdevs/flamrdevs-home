import type { HTMLAttributes } from "astro/types";

import SVG from "./SVG.astro";

type SVGProps = HTMLAttributes<"svg">;

type SVGIconProps = Omit<SVGProps, "slot">;

export type { SVGProps, SVGIconProps };
export default SVG;
