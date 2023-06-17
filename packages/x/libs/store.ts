type Store<T extends any> = {
	set: (value: T) => T;
	get: () => T;
	sub: (callback: (state: T) => void) => () => void;
};

const create = <T extends any>(initialValue: T): Store<T> => {
	const cbs = new Set<(state: T) => void>();

	let state = initialValue;

	const forEachFn = (cb: (state: T) => void) => {
		cb(state);
	};

	return {
		set: (value) => {
			state = value;
			cbs.forEach(forEachFn);
			return state;
		},
		get: () => {
			return state;
		},
		sub: (callback) => {
			cbs.add(callback);
			return () => {
				cbs.delete(callback);
			};
		},
	};
};

export type { Store };
export { create };
