import { Dispatch, SetStateAction } from 'react';

import type { Player } from '../../annotations/Player';

export interface IPlayerContext {
  player: Player | null;
  setPlayer: Dispatch<SetStateAction<Player | null>>;
  removePlayer: () => void;
}
