import { Show } from "solid-js";

import { LINK } from "@flamrdevs/const/exports.ts";

import { useStore } from "@flamrdevs/x-solid/libs/store.ts";

import { Center, Container, IconButton, Separator, Text } from "~/components/core.ts";
import { Icon } from "~/components/icons/index.tsx";
import { AnimatedSVGLogo } from "~/components/flamrdevs.ts";
import { IconButtonLink } from "~/components/router.ts";

import { ThemeStore, toggleTheme } from "~/stores/theme.ts";

import { flamrdevssvg } from "~/styles/pages/index.css";

const IndexPage = () => {
	const theme = useStore(ThemeStore);

	return (
		<>
			<Container max="md" px="4">
				<Separator orientation="horizontal" />
				<Center gap="2" p={{ __: "1", md: "2" }}>
					<Text family="mono">flamrdevs</Text>

					<div style="flex-grow: 1;"></div>

					<Separator orientation="vertical" style="height: 1.5rem" />

					<IconButton onClick={toggleTheme} aria-label="Toggle theme">
						<Show when={theme() === "dark"} fallback={<Icon i="Moon" />}>
							<Icon i="Sun" />
						</Show>
					</IconButton>

					<Separator orientation="vertical" style="height: 1.5rem" />

					<IconButtonLink href={LINK.GITHUB} target="_blank" aria-label="GitHub">
						<Icon i="Github" />
					</IconButtonLink>
				</Center>
				<Separator orientation="horizontal" />
			</Container>

			<Center>
				<AnimatedSVGLogo class={flamrdevssvg} />
			</Center>
		</>
	);
};

export default IndexPage;
