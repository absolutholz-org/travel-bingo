import { usePubNub } from 'pubnub-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Player } from '../annotations/Player';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Invitation } from '../components/Invitation';
import { useGameConfigContext } from '../context/GameConfigContext/_useGameConfigContext';
import {
	MAXIMUM_PLAYERS_ALLOWED,
	MINIMUM_PLAYERS_REQUIRED,
} from '../Game.constants';

export const enum MessageAction {
	NewJoiner = 'new joiner',
	UpdatePlayerList = 'players updated',
	StartGame = 'start game',
}

type NewPlayerMessage = {
	action: MessageAction.NewJoiner;
	player: Player;
};

export function LobbyHost(): JSX.Element {
	const navigate = useNavigate();
	const { gameId } = useParams();
	const { setGameId, players, addPlayer, parameters } =
		useGameConfigContext();

	const pubnub = usePubNub();
	const [channels] = useState([`travel-bingo_${gameId}`]);

	const handleMessage = ({ message }: { message: NewPlayerMessage }) => {
		console.log('handling message', { message });

		if (message.action === MessageAction.NewJoiner) {
			addPlayer(message.player);
			return;
		}
	};

	const handleStartGame = () => {
		pubnub.publish({
			channel: channels[0],
			message: {
				action: MessageAction.StartGame,
			},
		});
		navigate(`/game/${gameId}`);
	};

	useEffect(() => {
		pubnub.addListener({ message: handleMessage });
		pubnub.subscribe({ channels });
	}, [pubnub, channels]);

	useEffect(() => {
		if (gameId !== undefined) {
			setGameId(gameId);
		}
	}, [gameId]);

	useEffect(() => {
		console.log({ players });
		pubnub.publish({
			channel: channels[0],
			message: {
				action: MessageAction.UpdatePlayerList,
				players,
				parameters,
			},
		});
	}, [players]);

	return (
		<main>
			<Container>
				<h1>Game {gameId} lobby</h1>

				{gameId && (
					<ul>
						{players &&
							players.map(({ id, name }) => (
								<li key={`lobby-player_${id}`}>{name}</li>
							))}

						{[
							...Array(
								MAXIMUM_PLAYERS_ALLOWED - (players?.length ?? 0)
							),
						].map((_: undefined, index: number) => (
							<li key={`lobby-player-slot_${index}`}>
								<Invitation gameId={gameId} />
							</li>
						))}
					</ul>
				)}

				<button
					disabled={players.length < MINIMUM_PLAYERS_REQUIRED}
					onClick={handleStartGame}
					type="button"
				>
					<Button>Start game</Button>
				</button>
			</Container>
		</main>
	);
}
