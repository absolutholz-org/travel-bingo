import { STORAGE_PREFIX } from '../Game.constants';

export function readPersistedGameCard(gameId: string): GamePlayState | null {
	const gameCard = sessionStorage.getItem(`${STORAGE_PREFIX}_${gameId}`);

	if (gameCard === null) return null;

	const gameState = JSON.parse(gameCard);
	return gameState;
}

export function persistGameCard(gameId: string, gameCard: GamePlayState) {
	sessionStorage.setItem(
		`${STORAGE_PREFIX}_${gameId}`,
		JSON.stringify(gameCard)
	);
}

export function readPersistedGameConfig(gameId: string): GamePlayState | null {
	const gameConfig = sessionStorage.getItem(
		`${STORAGE_PREFIX}_${gameId}_config`
	);

	if (gameConfig === null) return null;

	const gameState = JSON.parse(gameConfig);
	return gameState;
}

export function persistGameConfig(gameId: string, gameConfig: GamePlayState) {
	sessionStorage.setItem(
		`${STORAGE_PREFIX}_${gameId}`,
		JSON.stringify(gameConfig)
	);
}
