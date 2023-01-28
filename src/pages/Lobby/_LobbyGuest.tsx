import { usePubNub } from 'pubnub-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Player } from '../../annotations/Player';
import { GameParameters } from '../../context/GameConfigContext/_GameConfigContext.annotations';
import { useGameConfigContext } from '../../context/GameConfigContext/_useGameConfigContext';
import { usePlayerContext } from '../../context/PlayerContext';
import { PlayerList } from './components/PlayerList';
import { Lobby } from './_Lobby';
import { MessageAction } from './_LobbyHost';

type PlayersMessage = {
	action: MessageAction.UpdatePlayerList;
	players: Player[];
	parameters: GameParameters;
};

export function LobbyGuest(): JSX.Element {
	const navigate = useNavigate();
	const { gameId } = useParams();
	const { players, setPlayers, setParameters } = useGameConfigContext();
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

	return <Lobby>{gameId && <PlayerList players={players} />}</Lobby>;
}
