import { STORAGE_PREFIX } from '../../Game.constants';
import { GamePlayState } from './_GamePlayContext.annotations';

export function persistState(gameId: string, state: GamePlayState) {
	sessionStorage.setItem(
		`${STORAGE_PREFIX}_${gameId}_game`,
		JSON.stringify(state)
	);
}

export function readPersistedState(gameId: string): GamePlayState | null {
	const gamePlay = sessionStorage.getItem(`${STORAGE_PREFIX}_${gameId}_game`);

	if (gamePlay === null) return null;

	const gameState = JSON.parse(gamePlay);
	return gameState;
}
