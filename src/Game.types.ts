import { FREE_SPACE_POSITIONS, WINNING_COMBINATIONS } from './Game.constants';

export type Symbol = {
	id: string;
	filename: string;
};

export type GameCard = {};

export type WinningCombo = typeof WINNING_COMBINATIONS[number];

export type FreeSpacePosition = typeof FREE_SPACE_POSITIONS[number];

export type GameCardSquareStatus = 'open' | 'closed';
