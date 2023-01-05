import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FreeSpace } from '../components/FreeSpace';
import { GameGrid } from '../components/GameGrid';
import { SignButton } from '../components/SignButton/_SignButton';
import {
	GamePlayContextProvider,
	useGamePlayContext,
} from '../context/GamePlayContext';
import type {
	GridRow,
	GridSquare,
} from '../context/GamePlayContext/_GamePlayContext.annotations';
import { usePlayerContext } from '../context/PlayerContext';
import { usePlayerNotification } from '../hooks/usePlayerNotification';

function isNeighborClosed(
	grid: GridRow[],
	row: number,
	column: number,
	directionRow: 0 | 1 | -1,
	directionColumn: 0 | 1 | -1
): boolean {
	// let matches: IGameCell[] = [];

	if (directionColumn === 0 && directionRow === 0) {
		throw new Error(
			`Incorrect directional params, row: ${directionRow}, column: ${directionColumn}`
		);
	}

	if (row < 0 || column < 0 || row >= grid.length || column >= grid.length)
		return true;

	const gridSquare = grid[row][column];
	const isClosed = gridSquare?.status === 'closed';

	if (!isClosed) return false;

	// neighbor matches current player piece, check its neighbor
	return isNeighborClosed(
		grid,
		row + directionRow,
		column + directionColumn,
		directionRow,
		directionColumn
	);
}

export function Game(): JSX.Element {
	const { gameId } = useParams();

	if (gameId === undefined) return <></>;

	return (
		<GamePlayContextProvider gameId={gameId}>
			<_Game />
		</GamePlayContextProvider>
	);
}

function _Game(): JSX.Element {
	const { gameId } = useParams();
	const { grid, updateGrid } = useGamePlayContext();
	const { notifyPlayers } = usePlayerNotification(gameId!, handleMessage);
	const { player } = usePlayerContext();

	const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>(
		'playing'
	);
	useEffect(() => {
		if (gameState === 'won') {
			alert('game won');
		}
		if (gameState === 'lost') {
			alert('game lost');
		}
	}, [gameState]);

	function announceGameWon() {
		setGameState('won');
		notifyPlayers({ action: 'gamewon', data: { player: player! } });
	}

	function handleSignClick(rowIndex: number, columnIndex: number) {
		if (grid === undefined) return;

		grid[rowIndex][columnIndex].status = 'closed';
		updateGrid(grid);

		// check if column is complete
		if (
			isNeighborClosed(grid, rowIndex, columnIndex, -1, 0) &&
			isNeighborClosed(grid, rowIndex, columnIndex, 1, 0)
		) {
			announceGameWon();
			return;
		}

		// check if row is complete
		if (
			isNeighborClosed(grid, rowIndex, columnIndex, 0, -1) &&
			isNeighborClosed(grid, rowIndex, columnIndex, 0, 1)
		) {
			announceGameWon();
			return;
		}

		// check if diagonal is complete (NW/SE)
		if (rowIndex === columnIndex) {
			if (
				isNeighborClosed(grid, rowIndex, columnIndex, -1, -1) &&
				isNeighborClosed(grid, rowIndex, columnIndex, 1, 1)
			) {
				announceGameWon();
				return;
			}
		}

		// check if diagonal is complete (NE/SW)
		if (rowIndex + columnIndex === grid.length - 1) {
			if (
				isNeighborClosed(grid, rowIndex, columnIndex, -1, 1) &&
				isNeighborClosed(grid, rowIndex, columnIndex, 1, -1)
			) {
				announceGameWon();
				return;
			}
		}

		// check it corners are complete
		if (
			((rowIndex === 0 && columnIndex === 0) ||
				(rowIndex === 0 && columnIndex === grid.length - 1) ||
				(rowIndex === grid.length - 1 && columnIndex === 0) ||
				(rowIndex === grid.length - 1 &&
					columnIndex === grid.length - 1)) &&
			grid[0][0].status === 'closed' &&
			grid[0][grid.length - 1].status === 'closed' &&
			grid[grid.length - 1][0].status === 'closed' &&
			grid[grid.length - 1][grid.length - 1].status === 'closed'
		) {
			announceGameWon();
			return;
		}
	}

	function handleMessage({ message }: { message: any }) {
		console.log('handling message', { message });
		if (message.action === 'gamewon') {
			setGameState('lost');
		}
	}

	const _GridSquare = ({
		gridSquare,
		rowIndex,
		columnIndex,
	}: {
		gridSquare: GridSquare;
		rowIndex: number;
		columnIndex: number;
	}): JSX.Element => {
		return (
			<>
				{gridSquare.id !== 'free' ? (
					<SignButton
						description={gridSquare.id}
						filename={gridSquare.filename}
						name={gridSquare.id}
						onClick={() => handleSignClick(rowIndex, columnIndex)}
						status={gridSquare.status}
					/>
				) : (
					<FreeSpace disabled>Free Space</FreeSpace>
				)}
			</>
		);
	};

	return (
		<main>
			<h1>Game</h1>

			{grid && (
				<GameGrid>
					{grid.map((gridRow, rowIndex) =>
						gridRow.map((gridSquare, columnIndex) => (
							<_GridSquare
								columnIndex={columnIndex}
								gridSquare={gridSquare}
								key={`bingo-grid_${rowIndex}x${columnIndex}`}
								rowIndex={rowIndex}
							/>
						))
					)}
				</GameGrid>
			)}
		</main>
	);
}
