import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Checkbox, Switch } from "./inputs.tsx";

describe("Checkbox", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Checkbox data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});
});

describe("Switch", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Switch data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});
});
