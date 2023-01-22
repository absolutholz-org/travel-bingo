import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

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

const frequencies = [
	...new Set(germanyConfig.signs.map(({ frequency }) => frequency).flat()),
];
const locations = [
	...new Set(germanyConfig.signs.map(({ locations }) => locations).flat()),
];

const SignLabelList = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
`;
const SignLabel = styled.label`
	display: block;
	width: 100%;
`;
const SignLabelImage = styled.div`
	align-items: center;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
`;
const SignLabelLabel = styled.div`
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

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
				<h1>Create</h1>

				<div>{player?.name}</div>

				<h2>Rules</h2>

				<form onSubmit={handleCreateGame}>
					<fieldset>
						<legend>Winning combinations</legend>

						{WINNING_COMBINATIONS.map((combo) => (
							<label
								htmlFor={`combos_${combo}`}
								key={`combos_${combo}`}
							>
								<input
									checked={parameters.combos.includes(combo)}
									id={`combos_${combo}`}
									onChange={handleComboChange}
									type="checkbox"
									value={combo}
								/>
								{combo}
							</label>
						))}
					</fieldset>

					<fieldset>
						<legend>Free space</legend>

						{FREE_SPACE_POSITION.map((space) => (
							<label
								htmlFor={`free-space_${space}`}
								key={`free-space_${space}`}
							>
								<input
									checked={parameters.freeSpace === space}
									id={`free-space_${space}`}
									name="free-space"
									onChange={handleFreeSpaceChange}
									type="radio"
									value={space}
								/>
								{space}
							</label>
						))}
					</fieldset>

					<h2>Signs</h2>

					<div>Currently selected: {symbols.length} symbols</div>

					<fieldset>
						<legend>Frequency</legend>

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
						<legend>Location</legend>

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

					<button
						aria-checked={showIndividualSymbolSelection}
						onClick={() =>
							setShowIndividualSymbolSelection(
								!showIndividualSymbolSelection
							)
						}
						role="switch"
						type="button"
					>
						Advanced selection
					</button>

					{showIndividualSymbolSelection && (
						<fieldset>
							<legend>Included signs</legend>

							<SignLabelList>
								{germanyConfig.signs.map(
									({ filename, id, name }) => (
										<SignLabel
											htmlFor={`sign_${id}`}
											key={`sign_${id}`}
										>
											<SignLabelImage>
												<img
													alt={id}
													loading="lazy"
													src={`${SIGN_DIRECTORY}germany/${filename}`}
												/>
											</SignLabelImage>
											<input
												checked={symbols.includes(id)}
												id={`sign_${id}`}
												onChange={handleSymbolChange}
												type="checkbox"
												value={id}
											/>
											<SignLabelLabel>
												{name.de}
											</SignLabelLabel>
										</SignLabel>
									)
								)}
							</SignLabelList>
						</fieldset>
					)}

					<button disabled={player === undefined} type="submit">
						<Button>Create</Button>
					</button>
				</form>
			</Container>
		</main>
	);
}
