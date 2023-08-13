import { Show } from "solid-js";

import { GithubIcon, MoonIcon, SunIcon } from "lucide-solid";

import { LINK } from "@flamrdevs/const/exports";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Center, Container, IconButton, Separator } from "~/components/core";
import { AnimatedSVGLogo } from "~/components/flamrdevs";
import { IconButtonLink } from "~/components/router";

import { ThemeStore, toggleTheme } from "~/stores/theme";

import { flamrdevssvg } from "~/styles/pages/index.css";

const IndexPage = () => {
	const theme = useStore(ThemeStore);

	return (
		<>
			<Container max="lg" p="2">
				<Separator orientation="horizontal" />
			</Container>

			<Center>
				<AnimatedSVGLogo class={flamrdevssvg} />
			</Center>

			<Container max="lg" p="2">
				<Separator orientation="horizontal" />
			</Container>

			<Container max="lg" p="2">
				<Center gap="2">
					<IconButtonLink href={LINK.GITHUB} target="_blank">
						<GithubIcon />
					</IconButtonLink>
				</Center>
			</Container>

			<Container max="lg" p="2">
				<Center gap="2">
					<IconButton onClick={toggleTheme}>
						<Show when={theme() === "dark"} fallback={<MoonIcon />}>
							<SunIcon />
						</Show>
					</IconButton>
				</Center>
			</Container>
		</>
	);
};

export default IndexPage;
