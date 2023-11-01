import { Show } from "solid-js";

import { LINK } from "@flamrdevs/const/exports.ts";

import { useStore } from "@flamrdevs/x-solid/libs/store.ts";

import { Center, Container, Icon, IconButton, Separator, Text } from "~/components/core.ts";
import { AnimatedSVGLogo } from "~/components/flamrdevs.ts";
import { IconButtonLink } from "~/components/router.ts";

import { ThemeStore, toggleTheme } from "~/stores/theme.ts";

import { flamrdevssvg } from "~/styles/pages/index.css";

const IndexPage = () => {
	const theme = useStore(ThemeStore);

	return (
		<>
			<Center>
				<AnimatedSVGLogo class={flamrdevssvg} />
			</Center>

			<Container max="sm">
				<Separator orientation="horizontal" />
				<Center gap="2" p="2">
					<Text family="mono">flamrdevs</Text>

					<div style="flex-grow: 1;"></div>

					<Separator orientation="vertical" style="height: 1.5rem" />

					<IconButton onClick={toggleTheme}>
						<Show when={theme() === "dark"} fallback={<Icon i="Moon" />}>
							<Icon i="Sun" />
						</Show>
					</IconButton>

					<Separator orientation="vertical" style="height: 1.5rem" />

					<IconButtonLink href={LINK.GITHUB} target="_blank">
						<Icon i="Github" />
					</IconButtonLink>
				</Center>
				<Separator orientation="horizontal" />
			</Container>
		</>
	);
};

export default IndexPage;
