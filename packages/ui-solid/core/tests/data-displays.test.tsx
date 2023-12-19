import { describe, expect, it } from "vitest";

import { renderRootElement } from "../../test.utils.tsx";

import { Badge, Image, Kbd, Progress, Spinner } from "../data-displays.tsx";
import { Lucide } from "../../icons/index.ts";

describe("Badge", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Badge {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Icon", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Lucide.Icon {...props} i="Github" />);
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

describe("Spinner", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Spinner {...props} />);
		expect(element.tagName).toEqual("svg");
	});
});
