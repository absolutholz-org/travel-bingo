import { useEffect, useState } from 'react';
import { STORAGE_PREFIX } from '../Game.constants';
import { GameCardSquareStatus, WinningCombo } from '../Game.types';

type SymbolBase = {
	id: string;
};

type GameCardSquare = SymbolBase & {
	state: GameCardSquareStatus;
};

type GameConfig = {
	combos: WinningCombo;
};

type GameState = {
	config: GameConfig;
	gameCard: Record<string, SymbolBase | GameCardSquare>[];
};

export function readPersistedGameState(gameId: string): GameState | null {
	const gameState = sessionStorage.getItem(`${STORAGE_PREFIX}_${gameId}`);

	if (gameState === null) return null;

	return JSON.parse(gameState);
}

export function persistGameState(gameId: string, state: GameState) {
	sessionStorage.setItem(
		`${STORAGE_PREFIX}_${gameId}`,
		JSON.stringify(state)
	);
}

export function useGameState({ gameId }: { gameId: string }): {
	config: GameState | null;
	gameCard: GameState | null;
	updateGameCardSquare: (position: string) => void;
} {
	const [config, setConfig] = useState();
	const [gameCard, setGameCard] = useState();

	// const [state, setState] = useState<GameState | null>(() =>
	// 	readPersistedGameState(gameId)
	// );

	// function setGameState(state: GameState) {
	// 	setState(state);
	// 	persistGameState(gameId, state);
	// }

	useEffect(() => {
		const { config, gameCard } = readPersistedGameState(gameId);
		console.log('loading game state', { gameId, config, gameCard });
	}, []);

	function updateGameCardSquare(position: string) {
		debugger;
		// {...gameCard, position: gameCard[position]}
	}

	return {
		config,
		gameCard,
		updateGameCardSquare,
	};
}
