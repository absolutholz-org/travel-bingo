import { Dispatch, SetStateAction } from 'react';
import type { Player } from '../../annotations/Player';
import {
	FREE_SPACE_POSITION,
	WINNING_COMBINATIONS,
} from '../../Game.constants';

// type Combos = 'rows' | 'columns' | 'diagonals' | 'corners';
type Combos = typeof WINNING_COMBINATIONS[number];
type FreeSpace = typeof FREE_SPACE_POSITION[number];

export interface GameParameters {
	size: number;
	combos: Combos[];
	freeSpace: FreeSpace;
	symbols?: string[];
}

export interface GameConfig {
	gameId: string | null;
	players: Player[];
	host?: Player | null;
	parameters: GameParameters;
}

export interface IGameConfigContext extends GameConfig {
	setGameId: Dispatch<SetStateAction<string | null>>;
	setPlayers: Dispatch<SetStateAction<Player[]>>;
	setHost: Dispatch<SetStateAction<Player | null>>;
	setParameters: Dispatch<SetStateAction<GameParameters>>;
	addPlayer: (player: Player) => void;
	removePlayer: (id: string) => void;
}
