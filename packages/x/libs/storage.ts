type Storage<T extends any> = {
	set: (value: T) => T;
	get: () => T;
};

const create = <T extends any>(key: string, initialValue: T, storage: globalThis.Storage = localStorage): Storage<T> => {
	return {
		set: (value: T): T => {
			try {
				storage.setItem(key, JSON.stringify(value));
			} catch (error) {}
			return value;
		},
		get: (): T => {
			try {
				let item = storage.getItem(key);
				if (item) return JSON.parse(item);
			} catch (error) {}
			return initialValue;
		},
	} as const;
};

export type { Storage };
export { create };
