import { useEffect, useState } from 'react';

import GameConfigContext from './_GameConfigContext';
import type { IGameConfigContextProvider } from './_GameConfigContextProvider.annotations';
import { STORAGE_PREFIX } from '../../Game.constants';
import { GameConfig, GameParameters } from './_GameConfigContext.annotations';
import { Player } from '../../annotations/Player';

export const GameConfigContextProvider = ({
  children,
}: IGameConfigContextProvider): JSX.Element => {
  let config: GameConfig;
  const [gameId, setGameId] = useState<string | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [host, setHost] = useState<Player | null>(null);
  const [parameters, setParameters] = useState<GameParameters>({});

  const addPlayer = (player: Player) => {
    setPlayers((players) => {
      const existingPlayerMatch = players.find(
        (existingPlayer) =>
          player.id === existingPlayer.id ?? player.name === existingPlayer.name
      );

      if (existingPlayerMatch === undefined) {
        players.push(player);
      }

      return [...players];
    });
  };

  const removePlayer = (id: string) => {
    setPlayers((players) => [...players.filter((player) => player.id !== id)]);
  };

  useEffect(() => {
    if (gameId !== null) {
      sessionStorage.setItem(
        `${STORAGE_PREFIX}_${gameId}`,
        JSON.stringify({ ...config, host, players, parameters })
      );
    }
  }, [host, players, parameters]);

  useEffect(() => {
    const storageConfig = sessionStorage.getItem(`${STORAGE_PREFIX}_${gameId}`);

    if (storageConfig !== null) {
      config = JSON.parse(storageConfig);
      const { players, host, parameters } = config;
      setPlayers(players);
      setHost(host ?? null);
      setParameters(parameters);
    }
  }, [gameId]);

  return (
    <GameConfigContext.Provider
      value={{
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
      }}
    >
      {children}
    </GameConfigContext.Provider>
  );
};
