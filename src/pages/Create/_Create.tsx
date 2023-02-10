import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';

import configJson from '../../configs/germany';

import { Container } from '../../components/Container';
import { PageSection } from '../../components/PageSection';
import { SiteHeader } from '../../components/SiteHeader';
import { Stack } from '../../components/Stack';
import {
	FREE_SPACE_POSITIONS,
	STORAGE_PREFIX,
	WINNING_COMBINATIONS,
} from '../../Game.constants';
import { FreeSpace } from './components/FreeSpace';
import { WinningCombinations } from './components/WinningCombinations';
import { SymbolGrid } from './components/SymbolGrid';
import { StickyFooter } from './components/StickyFooter';
import { SiteFooter } from '../../components/SiteFooter';

export function Create(): JSX.Element {
	const navigate = useNavigate();
	const [config, setConfig] = useState({
		combos: WINNING_COMBINATIONS,
		freeSpace: FREE_SPACE_POSITIONS[0],
		symbolSet: 'germany',
		symbols: configJson.symbols.map(({ id }) => id),
		players: [{ name: 'Host', id: nanoid, isHost: true }, ...new Array(5)],
	});

	function handleCreateGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const gameId = nanoid(5);

		sessionStorage.setItem(
			`${STORAGE_PREFIX}_${gameId}_config`,
			JSON.stringify({ ...config })
		);

		navigate(`/lobby/${gameId}/host`);
	}

	function handleComboChange(event: ChangeEvent<HTMLInputElement>) {
		const combos = event.target.checked
			? [...config.combos, event.target.value]
			: config.combos.filter((combo) => combo !== event.target.value);
		setConfig({ ...config, combos });
	}

	function handleFreeSpaceChange(event: ChangeEvent<HTMLInputElement>) {
		const freeSpace = event.target.value;
		setConfig({ ...config, freeSpace });
	}

	function handleSymbolChange(id: string) {
		setConfig((config) => {
			if (config.symbols.includes(id)) {
				return {
					...config,
					symbols: config.symbols.filter((symbol) => symbol !== id),
				};
			} else {
				config.symbols.push(id);
				return { ...config, symbols: config.symbols };
			}
		});
	}

	return (
		<>
			<SiteHeader />

			<main>
				<Container>
					<h1>Game Configuration</h1>
				</Container>

				<PageSection>
					<Container>
						<form onSubmit={handleCreateGame}>
							<Stack spacingLevelVertical={3}>
								<WinningCombinations
									combos={config.combos}
									onChange={handleComboChange}
								/>

								<FreeSpace
									freeSpace={config.freeSpace}
									onChange={handleFreeSpaceChange}
								/>

								<SymbolGrid
									onClick={handleSymbolChange}
									selectedSymbols={config.symbols}
									symbols={configJson.symbols}
								/>
							</Stack>

							<StickyFooter>
								<Button type="submit" variant="contained">
									Play
								</Button>
							</StickyFooter>
						</form>
					</Container>
				</PageSection>
			</main>

			<SiteFooter />
		</>
	);
}
