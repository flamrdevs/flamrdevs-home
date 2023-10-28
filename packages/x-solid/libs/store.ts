import { createEffect, createSignal, onCleanup } from "solid-js";
import type { Accessor } from "solid-js";

import type { IXStore } from "@flamrdevs/x/modules/ix.ts";

const useStore = <T extends any>(store: IXStore<T>) => {
	const [value, setValue] = createSignal<T>(store.get());

	createEffect(() => {
		onCleanup(
			store.sub((value) => {
				setValue(value as Exclude<T, Function>);
			})
		);
	});

	return value satisfies Accessor<T>;
};

export { useStore };
