import clsx from "@flamrdevs/x/modules/clsx";
import type { ClassValue } from "@flamrdevs/x/modules/clsx";

type ClassesProps = {
	class?: string | null;
	"class:list"?: string | Record<string, boolean> | Record<any, any> | Iterable<string> | Iterable<any>;
};

const getRootClassesx = <P extends ClassesProps>(props: P) => {
	const { class: className, "class:list": classList, ...rest } = props;
	return [(...classes: ClassValue[]) => clsx(classes, className, classList), rest] as const;
};

export type { ClassesProps };
export { getRootClassesx };
