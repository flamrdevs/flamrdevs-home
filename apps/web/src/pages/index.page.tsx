import { Show } from "solid-js";

import { GithubIcon, MoonIcon, SunIcon } from "lucide-solid";

import { LINK } from "@flamrdevs/const/exports";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Center, Container, IconButton, Separator } from "~/components/core";
import { AnimatedSVGLogo } from "~/components/flamrdevs";
import { IconButtonLink } from "~/components/router";

import { ThemeStore, toggleTheme } from "~/stores/theme";

import { flamrdevssvg, separatorvertical } from "~/styles/pages/index.css";

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
					<IconButtonLink href={LINK.GITHUB} target="_blank">
						<GithubIcon />
					</IconButtonLink>

					<Separator orientation="vertical" class={separatorvertical} />

					<IconButton onClick={toggleTheme}>
						<Show when={theme() === "dark"} fallback={<MoonIcon />}>
							<SunIcon />
						</Show>
					</IconButton>
				</Center>
				<Separator orientation="horizontal" />
			</Container>
		</>
	);
};

export default IndexPage;
