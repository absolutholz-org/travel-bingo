import { useEffect, useState } from 'react';

import type { Player } from '../../annotations/Player';
import PlayerContext from './_PlayerContext';
import type { IPlayerContextProvider } from './_PlayerContextProvider.annotations';

const STORAGE_KEY = 'absolutholzArcade_localPlayer';

export const PlayerContextProvider = ({
  children,
}: IPlayerContextProvider): JSX.Element => {
  const [player, setPlayer] = useState<Player | null>(null);

  const removePlayer = () => {
    setPlayer(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (player !== null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
  }

  useEffect(() => {
    const player = localStorage.getItem(STORAGE_KEY);
    setPlayer(player === null ? null : JSON.parse(player));
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
