import { HOST } from "@flamrdevs/const/exports.ts";

export const SITE = (...paths: string[]) => [import.meta.env.PROD ? HOST.SITE_PROD : HOST.SITE_DEV, ...paths].join("/");

export const STATIC = (...paths: string[]) => [import.meta.env.PROD ? HOST.STATIC_PROD : HOST.STATIC_DEV, ...paths].join("/");

export const WEB = (...paths: string[]) => [import.meta.env.PROD ? HOST.WEB_PROD : HOST.WEB_DEV, ...paths].join("/");

export const API = (...paths: string[]) => [import.meta.env.PROD ? HOST.API_PROD : HOST.API_DEV, ...paths].join("/");

export const IMAGE = (...paths: string[]) => [import.meta.env.PROD ? HOST.IMAGE_PROD : HOST.IMAGE_DEV, ...paths].join("/");
