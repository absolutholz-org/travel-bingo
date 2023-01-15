import type { Grid } from './_GamePlayContext.annotations';

function isNeighborClosed(
	grid: Grid,
	row: number,
	column: number,
	directionRow: 0 | 1 | -1,
	directionColumn: 0 | 1 | -1
): boolean {
	const size = Math.sqrt(Object.keys(grid).length);

	if (directionColumn === 0 && directionRow === 0) {
		throw new Error(
			`Incorrect directional params, row: ${directionRow}, column: ${directionColumn}`
		);
	}

	if (row < 0 || column < 0 || row >= size || column >= size) return true;

	const gridSquare = grid[`${row}x${column}`];
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

export function checkIfGameWon({
	grid,
	row,
	col,
}: {
	grid: Grid;
	row: number;
	col: number;
}): boolean {
	const size = Math.sqrt(Object.keys(grid).length);
	// check if column is complete
	if (
		isNeighborClosed(grid, row, col, -1, 0) &&
		isNeighborClosed(grid, row, col, 1, 0)
	) {
		// announceGameWon();
		return true;
	}

	// check if row is complete
	if (
		isNeighborClosed(grid, row, col, 0, -1) &&
		isNeighborClosed(grid, row, col, 0, 1)
	) {
		// announceGameWon();
		return true;
	}

	// check if diagonal is complete (NW/SE)
	if (row === col) {
		if (
			isNeighborClosed(grid, row, col, -1, -1) &&
			isNeighborClosed(grid, row, col, 1, 1)
		) {
			// announceGameWon();
			return true;
		}
	}

	// check if diagonal is complete (NE/SW)
	if (row + col === size - 1) {
		if (
			isNeighborClosed(grid, row, col, -1, 1) &&
			isNeighborClosed(grid, row, col, 1, -1)
		) {
			// announceGameWon();
			return true;
		}
	}

	// check it corners are complete
	if (
		((row === 0 && col === 0) ||
			(row === 0 && col === size - 1) ||
			(row === size - 1 && col === 0) ||
			(row === size - 1 && col === size - 1)) &&
		grid['0x0'].status === 'closed' &&
		grid[`0x${size - 1}`].status === 'closed' &&
		grid[`${size - 1}x0`].status === 'closed' &&
		grid[`${size - 1}x${size - 1}`].status === 'closed'
	) {
		// announceGameWon();
		return true;
	}

	return false;
}
