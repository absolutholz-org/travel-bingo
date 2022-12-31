import { useContext } from 'react';

import GameConfigContext from './_GameConfigContext';

export function useGameConfigContext() {
  const context = useContext(GameConfigContext);

  if (context === undefined) {
    throw new Error(
      'useGameConfigContext must be used within a GameConfigContextProvider'
    );
  }

  const {
    gameId,
    setGameId,
    host,
    setHost,
    players,
    setPlayers,
    addPlayer,
    removePlayer,
    parameters,
    setParameters,
  } = context;

  return {
    gameId,
    setGameId,
    host,
    setHost,
    players,
    setPlayers,
    addPlayer,
    removePlayer,
    parameters,
    setParameters,
  };
}
