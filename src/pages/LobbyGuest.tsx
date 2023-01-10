import { usePubNub } from 'pubnub-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Player } from '../annotations/Player';
import { Container } from '../components/Container';
import { Invitation } from '../components/Invitation';
import { GameParameters } from '../context/GameConfigContext/_GameConfigContext.annotations';
import { useGameConfigContext } from '../context/GameConfigContext/_useGameConfigContext';
import { usePlayerContext } from '../context/PlayerContext';
import { MAXIMUM_PLAYERS_ALLOWED } from '../Game.constants';
import { MessageAction } from './LobbyHost';

type PlayersMessage = {
	action: MessageAction.UpdatePlayerList;
	players: Player[];
	parameters: GameParameters;
};

export function LobbyGuest(): JSX.Element {
	const navigate = useNavigate();
	const { gameId } = useParams();
	const { setGameId, players, setPlayers, setParameters } =
		useGameConfigContext();
	const { player } = usePlayerContext();

	const pubnub = usePubNub();
	const [channels] = useState([`travel-bingo_${gameId}`]);

	const handleMessage = ({ message }: { message: PlayersMessage }) => {
		console.log('handling message', { message });

		if (message.action === MessageAction.UpdatePlayerList) {
			setPlayers(message.players);
			setParameters(message.parameters);
			return;
		}

		if (message.action === MessageAction.StartGame) {
			navigate(`/game/${gameId}`);
			return;
		}
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
		if (player !== null) {
			pubnub.publish({
				channel: channels[0],
				message: {
					action: MessageAction.NewJoiner,
					player: player,
				},
			});
		}
	}, [player]);

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
			</Container>
		</main>
	);
}
