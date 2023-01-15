import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';

import { Container } from '../components/Container';
import { FreeSpace } from '../components/FreeSpace';
import { GameGrid } from '../components/GameGrid';
import { SignButton } from '../components/SignButton/_SignButton';
import {
	GamePlayContextProvider,
	GridSquare,
	useGamePlayContext,
} from '../context/GamePlayContext';

export function Game(): JSX.Element {
	const { gameId } = useParams();

	if (gameId === undefined) return <></>;

	return (
		<GamePlayContextProvider gameId={gameId}>
			<_Game />
		</GamePlayContextProvider>
	);
}

const _GridSquare = ({
	gridSquare: { id, filename, row, col, status },
}: {
	gridSquare: GridSquare;
}): JSX.Element => {
	const { dispatch } = useGamePlayContext();

	function handleSignClick() {
		dispatch({
			type: 'SymbolFound',
			payload: {
				row,
				col,
			},
		});
	}

	return (
		<>
			{filename ? (
				<SignButton
					description={id}
					filename={filename}
					name={id}
					onClick={handleSignClick}
					status={status}
				/>
			) : (
				<FreeSpace disabled>Free Space</FreeSpace>
			)}
		</>
	);
};

function _Game(): JSX.Element {
	const { state } = useGamePlayContext();
	const { gameState, grid } = state;

	function handleBingoClick() {
		if (gameState === 'winnable') {
			alert('BINGO!');
		} else {
			alert('Not so fast');
		}
	}

	return (
		<main>
			<Container>
				<h1>Game</h1>

				{grid && (
					<GameGrid>
						{Object.entries(grid).map(([id, gridSquare]) => (
							<_GridSquare
								gridSquare={gridSquare}
								key={`bingo-grid_${id}`}
							/>
						))}
					</GameGrid>
				)}

				<div>
					<Button>
						<button onClick={handleBingoClick}>BINGO!</button>
					</Button>
				</div>
			</Container>
		</main>
	);
}
