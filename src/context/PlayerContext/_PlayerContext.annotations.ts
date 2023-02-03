import { Dispatch, SetStateAction } from 'react';

import type { Player } from '../../annotations/Player';

export interface IPlayerContext {
	player: Player | undefined | null; // undefined = we don't know status; null = no player found
	setPlayer: Dispatch<SetStateAction<Player | undefined | null>>;
	removePlayer: () => void;
}
