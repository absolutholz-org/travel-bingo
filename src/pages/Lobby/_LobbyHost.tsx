import Button from '@mui/material/Button';
import { usePubNub } from 'pubnub-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Player } from '../../annotations/Player';
import { useGameConfigContext } from '../../context/GameConfigContext/_useGameConfigContext';
import { MINIMUM_PLAYERS_REQUIRED } from '../../Game.constants';
import { PlayerList } from './components/PlayerList/_PlayerList';
import { Lobby } from './_Lobby';

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
	const { players, addPlayer, parameters } = useGameConfigContext();

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
		<Lobby>
			{gameId && <PlayerList players={players} />}

			<Button
				disabled={players.length < MINIMUM_PLAYERS_REQUIRED}
				onClick={handleStartGame}
				type="button"
				variant="contained"
			>
				Start game
			</Button>
		</Lobby>
	);
}
