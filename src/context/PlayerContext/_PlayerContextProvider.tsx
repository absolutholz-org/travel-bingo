import { useEffect, useState } from 'react';

import type { Player } from '../../annotations/Player';
import PlayerContext from './_PlayerContext';
import type { IPlayerContextProvider } from './_PlayerContextProvider.annotations';

const STORAGE_KEY = 'absolutholzArcade_localPlayer';

export const PlayerContextProvider = ({
	children,
}: IPlayerContextProvider): JSX.Element => {
	const [player, setPlayer] = useState<Player | undefined | null>();

	const removePlayer = () => {
		setPlayer(null);
		localStorage.removeItem(STORAGE_KEY);
	};

	if (player !== undefined && player !== null) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
	}

	useEffect(() => {
		const player1 = localStorage.getItem(STORAGE_KEY);
		setPlayer(player1 === null ? null : JSON.parse(player1));
	}, []);

	return (
		<PlayerContext.Provider
			value={{
				player,
				setPlayer,
				removePlayer,
			}}
		>
			{children}
		</PlayerContext.Provider>
	);
};
