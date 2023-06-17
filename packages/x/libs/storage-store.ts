import * as Storage from "./storage";
import * as Store from "./store";

const create = <T extends any>(key: string, initialValue: T, storage?: globalThis.Storage): Store.Store<T> => {
	const _storage = Storage.create(key, initialValue, storage);
	const _store = Store.create(_storage.get());

	return {
		set: (value) => _storage.set(_store.set(value)),
		get: _store.get,
		sub: _store.sub,
	};
};

export { create };
