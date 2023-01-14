import { GridSquareStatus } from './_GamePlayContext.types';

export type GridSquare = {
	col: number;
	id: string;
	filename?: string;
	row: number;
	status: GridSquareStatus;
};

export type Grid = Record<string, GridSquare>;

export type GamePlayState = {
	grid: Grid;
};

export type GamePlayReducerAction = {
	type: 'SymbolFound';
	payload: {
		row: number;
		col: number;
	};
};

export type GamePlayContext = {
	state: GamePlayState;
	dispatch: (action: GamePlayReducerAction) => void;
};
