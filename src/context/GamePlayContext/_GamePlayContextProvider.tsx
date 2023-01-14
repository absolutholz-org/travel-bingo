import { useReducer } from 'react';

import GamePlayContext from './_GamePlayContext';
import type {
	GamePlayReducerAction,
	GamePlayState,
} from './_GamePlayContext.annotations';
import { IGamePlayContextProvider } from './_GamePlayContextProvider.annotations';
import { persistState } from './_GamePlayContext.storage';
import { initGame } from './_GamePlayContext.initialization';

export const GamePlayContextProvider = ({
	children,
	gameId,
}: IGamePlayContextProvider): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, undefined, () =>
		initGame(gameId)
	);

	function notifyOtherPlayers() {}

	function reducer(state: GamePlayState, action: GamePlayReducerAction) {
		switch (action.type) {
			case 'SymbolFound':
				const newState = { ...state };
				newState.grid[
					`${action.payload.row}x${action.payload.col}`
				].status = 'closed';

				persistState(gameId, newState);
				notifyOtherPlayers();

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
