import type { ParentComponent } from "solid-js";

import { describe, expect, it } from "vitest";

import { MemoryRouter, Route } from "@flamrdevs/x-solid/modules/router.ts";

import { renderRootElement } from "../test.utils.tsx";

import { ButtonLink, IconButtonLink, Link } from "./links.tsx";

const wrapper: ParentComponent = (props) => {
	return (
		<MemoryRouter root={(props) => <>{props.children}</>}>
			<Route path="/" component={() => <>{props.children}</>} />
		</MemoryRouter>
	);
};

describe("ButtonLink", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <ButtonLink href="/" {...props} />, { wrapper });
		expect(element.tagName).toEqual("A");
	});
});

describe("IconButtonLink", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <IconButtonLink href="/" {...props} />, { wrapper });
		expect(element.tagName).toEqual("A");
	});
});

describe("Link", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Link href="/" {...props} />, { wrapper });
		expect(element.tagName).toEqual("A");
	});
});
