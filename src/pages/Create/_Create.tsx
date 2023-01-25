import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Radio,
	RadioGroup,
	Stack,
} from '@mui/material';

import { usePlayerContext } from '../../context/PlayerContext';
import { useGameConfigContext } from '../../context/GameConfigContext';
import { Container } from '../../components/Container';
import germanyConfig from '../../configs/germany';
import styled from '@emotion/styled';
import {
	FREE_SPACE_POSITION,
	SIGN_DIRECTORY,
	WINNING_COMBINATIONS,
} from '../../Game.constants';
import Button from '@mui/material/Button';
import { Typography } from '../../components/Typography';
import { WinningCombinations } from './components/WinningCombinations';
import { FreeSpace } from './components/FreeSpace';
import { Signs } from './components/Signs';
import { StickyFooter } from './components/StickyFooter';

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
		setPlayers(player === null ? [] : [player]);
		setHost(player);
		setParameters((parameters) => {
			return { ...parameters, symbols };
		});

		navigate(`/lobby/${gameId}/host`);
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

	function handleSymbolChange(event: ChangeEvent<HTMLInputElement>) {
		setSymbols((symbols) => {
			if (event.target.checked) {
				return [...symbols, event.target.value];
			}

			return symbols.filter((symbol) => symbol !== event.target.value);
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
					<Stack spacing={3}>
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

					<fieldset>
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
					</fieldset>

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
						<Signs
							onChange={handleSymbolChange}
							selectedSigns={symbols}
							signs={germanyConfig.signs}
						/>
					)}

					<StickyFooter>
						<Button
							disabled={player === undefined}
							type="submit"
							variant="contained"
						>
							Create
						</Button>
					</StickyFooter>
				</form>
			</Container>
		</main>
	);
}
