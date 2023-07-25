import { Show } from "solid-js";

import { GithubIcon, InstagramIcon, MoonIcon, SunIcon, TwitterIcon } from "lucide-solid";

import { LINK } from "@flamrdevs/const/exports";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Center, Container, FLAMRDEVS_SVG, IconButton, Separator } from "~/components/core";
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
				<FLAMRDEVS_SVG class={flamrdevssvg} />
			</Center>

			<Container max="lg" p="2">
				<Separator orientation="horizontal" />
			</Container>

			<Container max="lg" p="2">
				<Center gap="2">
					<IconButtonLink href={LINK.GITHUB} target="_blank">
						<GithubIcon />
					</IconButtonLink>

					<IconButtonLink href={LINK.INSTAGRAM} target="_blank">
						<InstagramIcon />
					</IconButtonLink>

					<IconButtonLink href={LINK.TWITTER} target="_blank">
						<TwitterIcon />
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
