import { Show } from "solid-js";

import { MoonIcon, SunIcon } from "lucide-solid";

import FLAMRDEVSSVG from "@flamrdevs/ui-solid/core/FLAMRDEVSSVG";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Center, Container, IconButton, Separator } from "~/components/core";

import { ThemeStore, toggleTheme } from "~/stores/theme";

import { flamrdevssvg } from "~/styles/pages/index.css";

const IndexPage = () => {
	const theme = useStore(ThemeStore);

	return (
		<>
			<Container max="md" p="4">
				<Separator orientation="horizontal" />
			</Container>

			<Center>
				<FLAMRDEVSSVG class={flamrdevssvg} />
			</Center>

			<Container max="md" p="4">
				<Separator orientation="horizontal" />

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
