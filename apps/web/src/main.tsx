import "@flamrdevs/ui/core/styles/globals.css";

import { root } from "@flamrdevs/x-solid/libs/web";

import { initTheme } from "~/stores/theme";

import App from "~/App";

initTheme();

root(() => <App />);
