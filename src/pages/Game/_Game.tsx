import { useParams } from 'react-router-dom';

import configJson from '../../configs/germany';

import { Container } from '../../components/Container';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { persistGameCard, readPersistedGameCard } from '../../lib/storage';
import { GameGrid } from '../../components/GameGrid';
import { GridSquare } from './components/GridSquare';
import { useGameState } from '../../hooks/useGameState';

export function Game(): JSX.Element {
	const { gameId } = useParams();

	// TODO: better to redirect to an error page
	if (gameId === undefined) return <></>;

	const { updateGameCardSquare } = useGameState({ gameId });

	const gameCard = readPersistedGameCard(gameId);

	// if (gameCard['0x0'].status === undefined) {
	// 	for (const key in gameCard) {
	// 		const { id } = gameCard[key];
	// 		gameCard[key].status = id === 'free' ? 'closed' : 'open';
	// 	}
	// 	persistGameCard(gameId, gameCard);
	// }

	console.log({ gameId, gameCard });

	// function handleBingoClick() {
	// 	if (gameState === 'winnable') {
	// 		alert('BINGO!');
	// 	} else {
	// 		alert('Not so fast');
	// 	}
	// }

	return (
		<>
			<SiteHeader />

			<main>
				<Container>
					<h1>Game</h1>
				</Container>

				{gameCard && (
					<GameGrid>
						{/* {Object.entries(gameCard).map(([key, gridSquare]) => (
							<GridSquare
								gridSquare={gridSquare}
								key={`bingo-grid_${key}`}
							/>
						))} */}
					</GameGrid>
				)}

				{/* <div>
				<Button
					onClick={handleBingoClick}
					size="large"
					sx={{ display: 'flex', width: '100%' }}
					variant="contained"
				>
					BINGO!
				</Button>
			</div> */}
			</main>

			<SiteFooter />
		</>
	);
}
