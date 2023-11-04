import { describe, expect, it } from "vitest";

import {} from "@solidjs/testing-library";

import { renderRootElement } from "../test.utils.tsx";

import { Checkbox, Switch } from "./inputs.tsx";

describe("Checkbox", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Checkbox {...props} />);
		expect(element.tagName).toEqual("DIV");
	});
});

describe("Switch", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Switch {...props} />);
		expect(element.tagName).toEqual("DIV");
	});
});
