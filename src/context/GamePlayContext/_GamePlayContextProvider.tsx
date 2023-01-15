import { useReducer } from 'react';

import GamePlayContext from './_GamePlayContext';
import type {
	GamePlayReducerAction,
	GamePlayState,
	Grid,
} from './_GamePlayContext.annotations';
import { IGamePlayContextProvider } from './_GamePlayContextProvider.annotations';
import { persistState } from './_GamePlayContext.storage';
import { initGame } from './_GamePlayContextProvider.initialization';
import { usePlayerNotification } from '../../hooks/usePlayerNotification';
import { checkIfGameWon } from './_GamePlayContextProvider.checks';

export const GamePlayContextProvider = ({
	children,
	gameId,
}: IGamePlayContextProvider): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, undefined, () =>
		initGame(gameId)
	);
	// const { notifyPlayers } = usePlayerNotification(gameId!, handleMessage);

	// function handleMessage({ message }: { message: any }) {
	// 	console.log('handling message', { message, player });

	// 	// if (message.data.player.id !== player!.id) return;

	// 	if (message.action === 'gamewon') {
	// 		setGameState('lost');
	// 	}

	// 	if (message.action === 'matchedsign') {
	// 		alert(`${message.data.player.name} found ${message.data.sign.id}`);
	// 	}
	// }

	function reducer(state: GamePlayState, action: GamePlayReducerAction) {
		switch (action.type) {
			case 'SymbolFound':
				const newState = { ...state };
				newState.grid[
					`${action.payload.row}x${action.payload.col}`
				].status = 'closed';

				newState.gameState = checkIfGameWon({
					grid: state.grid,
					row: action.payload.row,
					col: action.payload.col,
				})
					? 'winnable'
					: 'playing';

				persistState(gameId, newState);
				// notifyPlayers({
				// 	action: 'matchedsign',
				// 	// data: { player: player!, sign: { id: sign } },
				// });

				return newState;
			default:
				throw new Error();
		}
	}

	return (
		<GamePlayContext.Provider value={{ state, dispatch }}>
			{children}
		</GamePlayContext.Provider>
	);
};
