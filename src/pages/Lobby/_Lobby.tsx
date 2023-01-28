import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { useGameConfigContext } from '../../context/GameConfigContext';

export function Lobby({ children }: { children: ReactNode }): JSX.Element {
	const { gameId } = useParams();
	const { setGameId } = useGameConfigContext();

	useEffect(() => {
		if (gameId !== undefined) {
			setGameId(gameId);
		}
	}, [gameId]);

	return (
		<main>
			<Container>
				<h1>Game {gameId} lobby</h1>
				{children}
			</Container>
		</main>
	);
}
