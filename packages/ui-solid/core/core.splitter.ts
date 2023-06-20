import { ClassesProps } from "./core";

const classes = ["class", "classList"] as const satisfies Readonly<(keyof ClassesProps)[]>;
const children = ["children"] as const;

export { classes, children };
