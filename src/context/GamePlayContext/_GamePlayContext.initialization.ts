import germanyConfig from '../../configs/germany';
import { shuffle } from '../../Array.functions';
import { STORAGE_PREFIX } from '../../Game.constants';
import type { GamePlayState, Grid } from './_GamePlayContext.annotations';
import { persistState, readPersistedState } from './_GamePlayContext.storage';

export function initGame(gameId: string): GamePlayState | undefined {
	// load previous game state
	const gameState = readPersistedState(gameId);
	if (gameState !== null) return gameState;

	// create new game
	const gameConfig = sessionStorage.getItem(`${STORAGE_PREFIX}_${gameId}`);

	// TODO: handle this error better
	if (gameConfig === null) return;

	const { parameters } = JSON.parse(gameConfig);
	const { size } = parameters;

	const symbols = shuffle(germanyConfig.signs).slice(0, size ** 2 - 1);

	const grid: Grid = {};

	symbols.forEach((symbol, index) => {
		const { id, filename } = symbol;
		const row = Math.floor(index / size);
		const col = Math.floor(index % size);
		const recordId = `${row}x${col}`;

		grid[recordId] = {
			col,
			id,
			filename,
			row,
			status: 'open',
		};
	});

	const lastIndex = size - 1;
	const middleIndex = lastIndex / 2;
	grid[`${lastIndex}x${lastIndex}`] = {
		...grid[`${middleIndex}x${middleIndex}`],
	};
	grid[`${middleIndex}x${middleIndex}`] = {
		col: middleIndex,
		id: 'free',
		row: middleIndex,
		status: 'closed',
	};

	const state = { grid };

	persistState(gameId, state);

	return state;
}
