import { THEME, THEME_KEY, THEME_DEFAULT, setDocumentThemeAttribute } from "@flamrdevs/ui/styles/utils";
import type { Theme } from "@flamrdevs/ui/styles/types";
import { ixstoragest, ixbroadcastr } from "@flamrdevs/x/modules/ix";

const ThemeBroadcastChannel = ixbroadcastr<Theme>(THEME_KEY);

const ThemeStore = ixstoragest<Theme>(THEME_KEY, THEME_DEFAULT);

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
