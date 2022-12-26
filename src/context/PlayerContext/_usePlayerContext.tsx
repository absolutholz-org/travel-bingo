import { useContext } from 'react';

import PlayerContext from './_PlayerContext';

export function usePlayerContext() {
  const context = useContext(PlayerContext);

  if (context === undefined) {
    throw new Error(
      'usePlayerContext must be used within a PlayerContextProvider'
    );
  }

  const { name, setName } = context;

  return { name, setName };
}
