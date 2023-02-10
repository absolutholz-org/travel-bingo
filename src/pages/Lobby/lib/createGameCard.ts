import { shuffle } from '../../../Array.functions';
import type {
	Symbol,
	FreeSpacePosition,
	GameCardSquareStatus,
} from '../../../Game.types';

type GameCardSquare = { id: string };

export function createGameCard({
	symbolSet,
	symbolSelection,
	freeSpace = 'center',
	size = 5,
}: {
	symbolSet: Symbol[];
	symbolSelection: string[];
	freeSpace?: FreeSpacePosition;
	size?: number;
}): Record<string, GameCardSquare> {
	const hasFreeSpace = freeSpace !== 'none';

	const symbols = shuffle(
		symbolSet.filter((symbol) => symbolSelection.includes(symbol.id))
	).slice(0, size ** 2);

	const grid: Record<string, GameCardSquare> = {};

	symbols.forEach((symbol, index) => {
		const { id } = symbol;
		const row = Math.floor(index / size);
		const col = Math.floor(index % size);
		const recordId = `${row}x${col}`;

		grid[recordId] = { id };
	});

	if (!hasFreeSpace) return grid;

	const lastIndex = size - 1;

	// The game has no free space ... config.freeSpace === 'center'
	let row = lastIndex / 2;
	let col = lastIndex / 2;

	if (freeSpace === 'random') {
		row = Math.round(Math.random() * lastIndex);
		col = Math.round(Math.random() * lastIndex);
	}

	grid[`${row}x${col}`] = { id: 'free' };

	return grid;
}
