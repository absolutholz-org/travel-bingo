import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { usePlayerContext } from '../../context/PlayerContext';
import { useGameConfigContext } from '../../context/GameConfigContext';
import { Container } from '../../components/Container';
import germanyConfig from '../../configs/germany';
import Button from '@mui/material/Button';
import { Typography } from '../../components/Typography';
import { WinningCombinations } from './components/WinningCombinations';
import { FreeSpace } from './components/FreeSpace';
import { SymbolGrid } from './components/SymbolGrid';
import { StickyFooter } from './components/StickyFooter';
import { Stack } from '../../components/Stack';

const frequencies = [
	...new Set(germanyConfig.signs.map(({ frequency }) => frequency).flat()),
];
const locations = [
	...new Set(germanyConfig.signs.map(({ locations }) => locations).flat()),
];

export function Create(): JSX.Element {
	const navigate = useNavigate();
	const { player } = usePlayerContext();
	const { setGameId, setHost, setPlayers, parameters, setParameters } =
		useGameConfigContext();

	const [selectedFrequencies, setSelectedFrequencies] = useState(frequencies);
	const [selectedLocations, setSelectedLocations] = useState(locations);

	const [showIndividualSymbolSelection, setShowIndividualSymbolSelection] =
		useState(false);

	const [symbols, setSymbols] = useState(
		germanyConfig.signs.map((symbol) => symbol.id)
	);

	function handleCreateGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const gameId = nanoid(5);

		setGameId(gameId);
		// setPlayers(player === null ? [] : [player]);
		// setHost(player);
		setParameters((parameters) => {
			return { ...parameters, symbols };
		});

		navigate(`/lobby/${gameId}/game`);
	}

	function handleComboChange(event: ChangeEvent<HTMLInputElement>) {
		setParameters((parameters) => {
			const combos = event.target.checked
				? [...parameters.combos, event.target.value]
				: parameters.combos.filter(
						(combo) => combo !== event.target.value
				  );
			return { ...parameters, combos };
		});
	}

	function handleFreeSpaceChange(event: ChangeEvent<HTMLInputElement>) {
		setParameters((parameters) => {
			return { ...parameters, freeSpace: event.target.value };
		});
	}

	function handleFrequencyChange(event: ChangeEvent<HTMLInputElement>) {
		setSelectedFrequencies((frequencies) => {
			if (event.target.checked) {
				return [...frequencies, event.target.value];
			}

			return frequencies.filter(
				(frequency) => frequency !== event.target.value
			);
		});
	}

	function handleLocationChange(event: ChangeEvent<HTMLInputElement>) {
		setSelectedLocations((locations) => {
			if (event.target.checked) {
				return [...locations, event.target.value];
			}

			return locations.filter(
				(location) => location !== event.target.value
			);
		});
	}

	function handleSymbolChange(id: string) {
		setSymbols((symbols) => {
			if (symbols.includes(id)) {
				return symbols.filter((symbol) => symbol !== id);
			} else {
				return [...symbols, id];
			}
		});
	}

	useEffect(() => {
		setSymbols(
			germanyConfig.signs
				.filter((symbol) => {
					const isMatchingFrequency = selectedFrequencies.includes(
						symbol.frequency
					);
					const isMatchingLocation = symbol.locations.some(
						(location) => selectedLocations.includes(location)
					);
					return isMatchingFrequency && isMatchingLocation;
				})
				.map((symbol) => symbol.id)
		);
	}, [selectedFrequencies, selectedLocations]);

	return (
		<main>
			<Container>
				<Typography as="h1" level={4}>
					Create a Game
				</Typography>

				<Typography as="h2" level={2}>
					Rules
				</Typography>

				<form onSubmit={handleCreateGame}>
					<Stack spacingLevelVertical={3}>
						<WinningCombinations
							combos={parameters.combos}
							onChange={handleComboChange}
						/>

						<FreeSpace
							freeSpace={parameters.freeSpace}
							onChange={handleFreeSpaceChange}
						/>
					</Stack>

					<Typography as="h2" level={2}>
						Signs
					</Typography>

					<div>Currently selected: {symbols.length} symbols</div>

					{/* <fieldset>
						<Typography as="legend">Frequency</Typography>

						{frequencies.map((frequency) => (
							<label
								htmlFor={`frequency_${frequency}`}
								key={`frequency_${frequency}`}
							>
								<input
									checked={selectedFrequencies.includes(
										frequency
									)}
									id={`frequency_${frequency}`}
									onChange={handleFrequencyChange}
									type="checkbox"
									value={frequency}
								/>
								{frequency}
							</label>
						))}
					</fieldset>

					<fieldset>
						<Typography as="legend">Location</Typography>

						{locations.map((location) => (
							<label
								htmlFor={`location_${location}`}
								key={`location_${location}`}
							>
								<input
									checked={selectedLocations.includes(
										location
									)}
									id={`location_${location}`}
									onChange={handleLocationChange}
									type="checkbox"
									value={location}
								/>
								{location}
							</label>
						))}
					</fieldset> */}

					<Button
						aria-checked={showIndividualSymbolSelection}
						onClick={() =>
							setShowIndividualSymbolSelection(
								!showIndividualSymbolSelection
							)
						}
						role="switch"
						type="button"
						variant="outlined"
					>
						Advanced selection
					</Button>

					{showIndividualSymbolSelection && (
						<SymbolGrid
							onClick={handleSymbolChange}
							selectedSigns={symbols}
							signs={germanyConfig.signs}
						/>
					)}

					<StickyFooter isButtonDisabled={player === undefined} />
				</form>
			</Container>
		</main>
	);
}
