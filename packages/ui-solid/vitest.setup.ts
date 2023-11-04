import { afterEach } from "vitest";

import { cleanup } from "@solidjs/testing-library";

import "@vanilla-extract/css/disableRuntimeStyles";

afterEach(() => {
	cleanup();
});
