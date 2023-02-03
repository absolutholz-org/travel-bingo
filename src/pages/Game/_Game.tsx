import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { GameGrid } from '../../components/GameGrid';
import { SignButton } from '../../components/SignButton/_SignButton';
import {
	GamePlayContextProvider,
	GridSquare,
	useGamePlayContext,
} from '../../context/GamePlayContext';
import * as S from './_Game.styled';

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
				<S.FreeSpace disabled>
					<S.FreeSpace_Text>Free Space</S.FreeSpace_Text>
				</S.FreeSpace>
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
				<h1 hidden>Game</h1>

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
					<Button
						onClick={handleBingoClick}
						size="large"
						sx={{ display: 'flex', width: '100%' }}
						variant="contained"
					>
						BINGO!
					</Button>
				</div>
			</Container>
		</main>
	);
}
