import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { usePlayerContext } from '../context/PlayerContext';
import { useGameConfigContext } from '../context/GameConfigContext';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import germanyConfig from '../configs/germany';
import styled from '@emotion/styled';
import {
	FREE_SPACE_POSITION,
	SIGN_DIRECTORY,
	WINNING_COMBINATIONS,
} from '../Game.constants';

const tags = [
	...new Set(
		germanyConfig.signs
			.map(({ tags }) => tags)
			.flat()
			.filter((tag) => tag !== undefined)
	),
];
const frequencies = [
	...new Set(germanyConfig.signs.map(({ frequency }) => frequency).flat()),
];
const locations = [
	...new Set(germanyConfig.signs.map(({ locations }) => locations).flat()),
];
const colors = [
	...new Set(germanyConfig.signs.map(({ colors }) => colors).flat()),
];
const shapes = [
	...new Set(germanyConfig.signs.map(({ shape }) => shape).flat()),
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
		// setParameters({
		// 	size: 5,
		// 	combos: ['columns', 'rows', 'diagonals', 'corners'],
		// 	freeSpace: 'center',
		// 	symbols: ['stop', 'yield'],
		// });

		navigate(`/lobby/${gameId}/host`);
	}

	console.log({ parameters, selectedFrequencies });

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

	function handleSymbolChange(event: ChangeEvent<HTMLInputElement>) {
		setSymbols((symbols) => {
			if (event.target.checked) {
				return [...symbols, event.target.value];
			}

			return symbols.filter((symbol) => symbol !== event.target.value);
		});
	}

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

					{false && (
						<>
							<fieldset>
								<legend>Location</legend>

								{locations.map((location) => (
									<label htmlFor={`location_${location}`}>
										<input
											checked={true}
											id={`location_${location}`}
											type="checkbox"
										/>
										{location}
									</label>
								))}
							</fieldset>

							<fieldset>
								<legend>Tags</legend>

								{tags.map((tag) => (
									<label htmlFor={`tag_${tag}`}>
										<input
											checked={true}
											id={`tag_${tag}`}
											type="checkbox"
										/>
										{tag}
									</label>
								))}
							</fieldset>

							<fieldset>
								<legend>Colors</legend>

								{colors.map((color) => (
									<label
										htmlFor={`color_${color}`}
										key={`color_${color}`}
									>
										<input
											checked={true}
											id={`color_${color}`}
											type="checkbox"
										/>
										{color}
									</label>
								))}
							</fieldset>
						</>
					)}

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

					<button disabled={player === undefined} type="submit">
						<Button>Create</Button>
					</button>
				</form>
			</Container>
		</main>
	);
}
