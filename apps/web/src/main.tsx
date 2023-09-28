import "@flamrdevs/ui/styles/globals.css";

import { root } from "@flamrdevs/x-solid/libs/web";

import { initTheme } from "~/stores/theme";

import App from "~/App";

import * as dotenv from "~/dotenv";

console.log(dotenv.NAME);

initTheme();

root(() => <App />);
