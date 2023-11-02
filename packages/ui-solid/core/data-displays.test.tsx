import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Badge, Icon, Image, Kbd, Progress } from "./data-displays.tsx";

describe("Badge", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Badge data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Icon", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Icon data-testid="root" i="Github" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("svg");
	});
});

describe("Image", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Image data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Kbd", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Kbd data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("KBD");
	});
});

describe("Progress", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Progress data-testid="root" label="Label" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});
});
