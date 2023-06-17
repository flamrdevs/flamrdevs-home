type BroadcastChannel<T extends any> = {
	send: (data: T) => T;
	listen: (callback: (data: T) => void) => () => void;
};

const create = <T extends any>(name: string): BroadcastChannel<T> => {
	if (typeof window === "undefined") return { send: (data) => data, listen: () => () => {} };

	const bc = new BroadcastChannel(name);

	return {
		send: (data) => {
			bc.postMessage(data);
			return data;
		},
		listen: (callback) => {
			const listener = (event: MessageEvent<T>) => {
				callback(event.data);
			};

			bc.addEventListener("message", listener);
			return () => {
				bc.removeEventListener("message", listener);
			};
		},
	};
};

export type { BroadcastChannel };
export { create };
