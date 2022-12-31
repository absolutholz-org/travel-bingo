import { Dispatch, SetStateAction } from 'react';
import { GridSquareStatus } from './_GamePlayContext.types';

type GridSquare = {
  id: string;
  file: string;
  status: GridSquareStatus;
};

export type GridRow = GridSquare[];

export interface IGamePlayContext {
  grid?: GridRow[];
  updateGrid: (grid: GridRow[]) => void;
  setGameId: Dispatch<SetStateAction<string | null>>;
  setSize: Dispatch<SetStateAction<number>>;
}
