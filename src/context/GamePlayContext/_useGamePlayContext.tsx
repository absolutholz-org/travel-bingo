import { useContext } from 'react';

import GamePlayContext from './_GamePlayContext';

export function useGamePlayContext() {
  const context = useContext(GamePlayContext);

  if (context === undefined) {
    throw new Error(
      'useGamePlayContext must be used within a GamePlayContextProvider'
    );
  }

  const { grid, updateGrid } = context;

  return { grid, updateGrid };
}
