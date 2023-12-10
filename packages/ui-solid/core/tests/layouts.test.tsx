import { describe, expect, it } from "vitest";

import { Span, renderRootElement } from "../../test.utils.tsx";

import { Box, Block, Flex, Center, Grid, Container } from "../layouts.tsx";

describe("Box", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Box {...props} />);
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Box as={Span} {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Block", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Block {...props} />);
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Block as={Span} {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Flex", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Flex {...props} />);
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Flex as={Span} {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Center", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Center {...props} />);
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Center as={Span} {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Grid", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Grid {...props} />);
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Grid as={Span} {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});

describe("Container", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Container {...props} />);
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Container as={Span} {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});
