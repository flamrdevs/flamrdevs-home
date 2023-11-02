import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Link } from "./navigations.tsx";

describe("Link", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Link data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Link as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});
