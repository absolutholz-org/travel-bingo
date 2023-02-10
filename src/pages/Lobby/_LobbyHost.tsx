import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

import configJson from '../../configs/germany';

import { Container } from '../../components/Container';
import { PageSection } from '../../components/PageSection';
import { Lobby } from './_Lobby';
import { createGameCard } from './lib/createGameCard';
import {
	persistGameCard,
	readPersistedGameCard,
	readPersistedGameConfig,
} from '../../lib/storage';

export function LobbyHost(): JSX.Element {
	const navigate = useNavigate();
	const { gameId } = useParams();

	// TODO: better to redirect to an error page
	if (gameId === undefined) return <></>;

	const gameConfig = readPersistedGameConfig(gameId);

	// TODO: better to redirect to an error page
	if (gameConfig === null) return <></>;

	let gameCard = readPersistedGameCard(gameId);

	if (gameCard === null) {
		gameCard = createGameCard({
			symbolSet: configJson.symbols,
			symbolSelection: gameConfig.symbols,
			freeSpace: gameConfig.freeSpace,
		});
		persistGameCard(gameId, {
			config: { combos: gameConfig.combos },
			gameCard,
		});
	}

	console.log({ gameId, config: gameConfig, gameCard });

	const handleStartGame = () => {
		// pubnub.publish({
		// 	channel: channels[0],
		// 	message: {
		// 		action: MessageAction.StartGame,
		// 	},
		// });
		navigate(`/game/${gameId}`);
	};

	return (
		<Lobby>
			<PageSection>
				<Container>
					<Button onClick={handleStartGame} variant="contained">
						Start the game
					</Button>
				</Container>
			</PageSection>
		</Lobby>
	);
}
