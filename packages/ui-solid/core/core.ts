type ClassesProps = {
	class?: string;
	classList?: {
		[k: string]: boolean | undefined;
	};
};

export * as splitter from "./core.splitter";

export type { ClassesProps };
