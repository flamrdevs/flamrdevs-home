import { THEME, THEME_KEY, THEME_DEFAULT, setDocumentThemeAttribute } from "@flamrdevs/ui/core/styles/utils";
import type { Theme } from "@flamrdevs/ui/core/styles/types";
import * as BroadcastChannel from "@flamrdevs/x/libs/broadcast-channel";
import * as StorageStore from "@flamrdevs/x/libs/storage-store";

const ThemeBroadcastChannel = BroadcastChannel.create<Theme>(THEME_KEY);

const ThemeStore = StorageStore.create<Theme>(THEME_KEY, THEME_DEFAULT);

const changeTheme = (value: Theme) => {
	ThemeStore.set(ThemeBroadcastChannel.send(value));
};

const toggleTheme = () => {
	ThemeStore.set(ThemeBroadcastChannel.send(ThemeStore.get() === THEME[0] ? THEME[1] : THEME[0]));
};

const initTheme = () => {
	setDocumentThemeAttribute(ThemeStore.get());
	ThemeStore.sub(setDocumentThemeAttribute);
	return ThemeBroadcastChannel.listen(ThemeStore.set);
};

export { changeTheme, toggleTheme };
export { initTheme };
export { ThemeStore };
