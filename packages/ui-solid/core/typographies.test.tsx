import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Text } from "./typographies.tsx";

describe("Text", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Text data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Text as="span" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("SPAN");
	});
});
