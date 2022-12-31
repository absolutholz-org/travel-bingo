import { Dispatch, SetStateAction } from 'react';
import type { Player } from '../../annotations/Player';

export interface GameParameters {
  size?: number;
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
