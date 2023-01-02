import { useEffect, useState } from 'react';

import { shuffle } from '../../Array.functions';
import { STORAGE_PREFIX } from '../../Game.constants';
import GamePlayContext from './_GamePlayContext';
import { GridRow } from './_GamePlayContext.annotations';
import { IGamePlayContextProvider } from './_GamePlayContextProvider.annotations';
import germanyConfig from '../../configs/germany';

export const GamePlayContextProvider = ({
  children,
  gameId,
}: IGamePlayContextProvider): JSX.Element => {
  const [grid, setGrid] = useState<GridRow[]>();

  useEffect(() => {
    const gamePlay = sessionStorage.getItem(`${STORAGE_PREFIX}_${gameId}_game`);
    const gameConfig = sessionStorage.getItem(`${STORAGE_PREFIX}_${gameId}`);

    // TODO: handle this error better
    if (gameConfig === null) return;

    if (gamePlay !== null) {
      // load previous game state
      const gameState = JSON.parse(gamePlay);
      setGrid(gameState);
    } else {
      // create new game
      const { parameters } = JSON.parse(gameConfig);
      const signs = shuffle(germanyConfig.signs).slice(
        0,
        parameters.size ** 2 - 1
      );
      const grid = [...Array(parameters.size)].map(() => new Array());
      signs.forEach((sign, index) => {
        grid[Math.floor(index / parameters.size)][
          Math.floor(index % parameters.size)
        ] = sign;
      });
      const removed = grid[2].splice(2, 1, { id: 'free', status: 'closed' });
      grid[4].push(removed[0]);
      setGrid(grid);
    }

    console.log({ gameId });
  }, [gameId]);

  useEffect(() => {
    console.log({ grid });
  }, [grid]);

  const [size, setSize] = useState<number>(5);

  const updateGrid = (grid: GridRow[]) => {
    setGrid([...grid]);
  };

  useEffect(() => {
    if (grid !== undefined) {
      sessionStorage.setItem(
        `${STORAGE_PREFIX}_${gameId}_game`,
        JSON.stringify(grid)
      );
    }
  }, [gameId, grid]);

  return (
    <GamePlayContext.Provider value={{ grid, updateGrid, setSize }}>
      {children}
    </GamePlayContext.Provider>
  );
};
