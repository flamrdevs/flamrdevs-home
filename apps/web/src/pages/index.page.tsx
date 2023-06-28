import { Show } from "solid-js";

import { GithubIcon, InstagramIcon, MoonIcon, SunIcon, TwitterIcon } from "lucide-solid";

import * as LINK from "@flamrdevs/const/link";

import FLAMRDEVSSVG from "@flamrdevs/ui-solid/core/FLAMRDEVSSVG";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Center, Container, IconButton, Separator } from "~/components/core";
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
				<FLAMRDEVSSVG class={flamrdevssvg} />
			</Center>

			<Container max="lg" p="2">
				<Separator orientation="horizontal" />
			</Container>

			<Container max="lg" p="2">
				<Center gap="2">
					<IconButtonLink href={LINK.GITHUB}>
						<GithubIcon />
					</IconButtonLink>

					<IconButtonLink href={LINK.INSTAGRAM}>
						<InstagramIcon />
					</IconButtonLink>

					<IconButtonLink href={LINK.TWITTER}>
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
