import clsx from "@flamrdevs/x/modules/clsx";
import type { ClassValue } from "@flamrdevs/x/modules/clsx";

type ClassesProps = {
	class?: string;
	classList?: { [k: string]: boolean | undefined };
};

const ClassesKeys = ["class", "classList"] as const satisfies Readonly<(keyof ClassesProps)[]>;

const classex = <T extends ClassesProps>(classValue: ClassValue, classes: T) => clsx(classValue, classes[ClassesKeys[0]], classes[ClassesKeys[1]]);

export type { ClassesProps };
export { ClassesKeys };
export { classex };
