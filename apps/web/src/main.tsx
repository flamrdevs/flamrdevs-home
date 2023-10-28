import "@flamrdevs/ui/styles/globals.css";

import { root } from "@flamrdevs/x-solid/libs/web.ts";

import { initTheme } from "~/stores/theme.ts";

import App from "~/App.tsx";

import * as dotenv from "~/dotenv.ts";

console.log(dotenv.NAME);

initTheme();

root(() => <App />);
