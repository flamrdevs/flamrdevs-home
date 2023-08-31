import clsx from "@flamrdevs/x/modules/clsx";
import type { ClassValue } from "@flamrdevs/x/modules/clsx";

type ClassesProps = {
	class?: string | null;
};

const getRootClassesx = <P extends ClassesProps>(props: P) => {
	const { class: className, ...rest } = props;
	return [(...classes: ClassValue[]) => clsx(classes, className), rest] as const;
};

export type { ClassesProps };
export { getRootClassesx };
