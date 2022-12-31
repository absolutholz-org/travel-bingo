import { nanoid } from 'nanoid';

import { Player } from '../../annotations/Player';
import { usePlayerContext } from '../../context/PlayerContext';

export function useUserMgmt() {
  const { setPlayer, removePlayer } = usePlayerContext();

  const promptLogIn = (): Player | undefined => {
    const name = prompt('What should we call you?');
    if (name !== null) {
      const player = {
        name,
        id: nanoid(),
      };
      setPlayer(player);
      return player;
    }

    return;
  };

  const logOut = () => {
    removePlayer();
  };

  return {
    promptLogIn,
    logOut,
  };
}
