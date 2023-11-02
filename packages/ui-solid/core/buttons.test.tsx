import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Button, IconButton } from "./buttons.tsx";

describe("Button", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Button data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("BUTTON");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Button as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});

describe("IconButton", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <IconButton data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("BUTTON");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <IconButton as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});
