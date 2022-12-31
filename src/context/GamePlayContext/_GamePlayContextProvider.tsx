import { useEffect, useState } from 'react';
import { shuffle } from '../../Array.functions';

import { STORAGE_PREFIX } from '../../Game.constants';
import GamePlayContext from './_GamePlayContext';
import { GridRow } from './_GamePlayContext.annotations';
import { IGamePlayContextProvider } from './_GamePlayContextProvider.annotations';
import germanyConfig from '../../configs/germany';

export const GamePlayContextProvider = ({
  children,
}: IGamePlayContextProvider): JSX.Element => {
  const [grid, setGrid] = useState<GridRow[]>();
  const [size, setSize] = useState<number>(5);
  const [gameId, setGameId] = useState<string | null>(null);

  const updateGrid = (grid: GridRow[]) => {
    setGrid([...grid]);
  };

  useEffect(() => {
    const storageConfig = sessionStorage.getItem(
      `${STORAGE_PREFIX}_${gameId}_game`
    );

    if (storageConfig !== null) {
      const grid = JSON.parse(storageConfig);
      setGrid(grid);
    } else {
      // https://sebhastian.com/javascript-square/
      const signs = shuffle(germanyConfig.signs).slice(0, size ** 2 - 1);
      const grid = Array(Array(), Array(), Array(), Array(), Array());
      signs.forEach((sign, index) => {
        grid[Math.floor(index / size)][Math.floor(index % size)] = sign;
      });
      const removed = grid[2].splice(2, 1, { id: 'free', status: 'closed' });
      grid[4].push(removed[0]);
      setGrid(grid);
    }
    console.log({ grid });
  }, [gameId, size]);

  return (
    <GamePlayContext.Provider value={{ grid, updateGrid, setGameId, setSize }}>
      {children}
    </GamePlayContext.Provider>
  );
};
