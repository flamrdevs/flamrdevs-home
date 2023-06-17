type Event<T extends any> = {
	send: (data: T) => T;
	listen: (callback: (data: T) => void) => () => void;
};

const create = <T extends any>(): Event<T> => {
	const cbs = new Set<(data: T) => void>();

	return {
		send: (data) => {
			cbs.forEach((cb) => {
				cb(data);
			});
			return data;
		},
		listen: (callback) => {
			cbs.add(callback);
			return () => {
				cbs.delete(callback);
			};
		},
	};
};

export type { Event };
export { create };
