import { style } from "@vanilla-extract/css";

import { Display, Align, Justify } from "./Sprinkles.css";

const Root = style([Display({ d: "flex" }), Align({ ai: "center" }), Justify({ jc: "center" })]);

export { Root };
