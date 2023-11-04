import { describe, expect, it } from "vitest";

import {} from "@solidjs/testing-library";

import { renderRootElement } from "../test.utils.tsx";

import { Badge, Icon, Image, Kbd, Progress } from "./data-displays.tsx";

describe("Badge", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Badge {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Icon", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Icon {...props} i="Github" />);
		expect(element.tagName).toEqual("svg");
	});
});

describe("Image", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Image {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Kbd", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Kbd {...props} />);
		expect(element.tagName).toEqual("KBD");
	});
});

describe("Progress", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Progress {...props} label="Label" />);
		expect(element.tagName).toEqual("DIV");
	});
});
