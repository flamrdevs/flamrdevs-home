import type { Theme } from "./types.ts";

const THEME = ["dark", "light"] as const satisfies readonly Theme[];
const THEME_KEY = "flamrdevs:theme";
const THEME_DEFAULT = THEME[0] satisfies Theme;

const isTheme = (value?: unknown): value is Theme => THEME.includes(String(value) as Theme);

const getTheme = (value?: unknown) => (isTheme(value) ? value : THEME_DEFAULT);

const setDocumentThemeAttribute = (theme: Theme) => {
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

export { THEME, THEME_KEY, THEME_DEFAULT };
export { isTheme, getTheme, setDocumentThemeAttribute };
