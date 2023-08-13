type ClassesProps = {
	class?: string;
	classList?: {
		[k: string]: boolean | undefined;
	};
};

const ClassesKeys = ["class", "classList"] as const satisfies Readonly<(keyof ClassesProps)[]>;

export type { ClassesProps };
export { ClassesKeys };
