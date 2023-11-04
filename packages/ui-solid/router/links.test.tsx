import { describe, expect, it } from "vitest";

import {} from "@solidjs/testing-library";

import MemoryRouter from "@flamrdevs/x-solid/libs/router/MemoryRouter.tsx";

import { renderRootElement } from "../test.utils.tsx";

import { ButtonLink, IconButtonLink, Link } from "./links.tsx";

describe("ButtonLink", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <ButtonLink href="/" {...props} />, { wrapper: MemoryRouter });
		expect(element.tagName).toEqual("A");
	});
});

describe("IconButtonLink", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <IconButtonLink href="/" {...props} />, { wrapper: MemoryRouter });
		expect(element.tagName).toEqual("A");
	});
});

describe("Link", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Link href="/" {...props} />, { wrapper: MemoryRouter });
		expect(element.tagName).toEqual("A");
	});
});
