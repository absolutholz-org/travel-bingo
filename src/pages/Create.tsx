import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { usePlayerContext } from '../context/PlayerContext';
import { useGameConfigContext } from '../context/GameConfigContext';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import germanyConfig from '../configs/germany';
import styled from '@emotion/styled';
import { SIGN_DIRECTORY } from '../Game.constants';

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
console.log({ tags });

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
	const { setGameId, setHost, setPlayers, setParameters } =
		useGameConfigContext();

	const handleCreateGame = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const gameId = nanoid(5);

		setGameId(gameId);
		setPlayers(player === null ? [] : [player]);
		setHost(player);
		setParameters({
			size: 5,
			symbols: ['stop', 'yield'],
		});

		navigate(`/lobby/${gameId}/host`);
	};

	return (
		<main>
			<Container>
				<h1>Create</h1>

				<div>{player?.name}</div>

				<h2>Rules</h2>
				<form onSubmit={handleCreateGame}>
					<fieldset>
						<legend>Winning combinations</legend>
						<label htmlFor="rows">
							<input checked={true} id="rows" type="checkbox" />
							Rows
						</label>
						<label htmlFor="columns">
							<input
								checked={true}
								id="columns"
								type="checkbox"
							/>
							Columns
						</label>
						<label htmlFor="diagonals">
							<input
								checked={true}
								id="diagonals"
								type="checkbox"
							/>
							Diagonals
						</label>
						<label htmlFor="corners">
							<input
								checked={true}
								id="corners"
								type="checkbox"
							/>
							Corners
						</label>
					</fieldset>

					{/* <label htmlFor="location">
						<div>Location</div>
						<select id="location">
							<option value="germany">Germany</option>
						</select>
					</label> */}

					{/* <fieldset>
						<legend>Signs</legend>
            
						<label htmlFor="sign_x">
							<input id="sign_x" type="checkbox" />
							<div>Sign X</div>
						</label>
					</fieldset> */}

					<h2>Signs</h2>

					<fieldset>
						<legend>Frequency</legend>

						{frequencies.map((frequency) => (
							<label htmlFor={`frequency_${frequency}`}>
								<input
									checked={true}
									id={`frequency_${frequency}`}
									type="checkbox"
								/>
								{frequency}
							</label>
						))}
					</fieldset>

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
							<label htmlFor={`color_${color}`}>
								<input
									checked={true}
									id={`color_${color}`}
									type="checkbox"
								/>
								{color}
							</label>
						))}
					</fieldset>

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
										{/* <input
											checked={true}
											id={`sign_${id}`}
											type="checkbox"
										/> */}
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
