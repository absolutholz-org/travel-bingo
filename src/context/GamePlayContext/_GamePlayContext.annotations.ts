import { Dispatch, SetStateAction } from 'react';
import { GridSquareStatus } from './_GamePlayContext.types';

export type GridSquare = {
  id: string;
  filename: string;
  status: GridSquareStatus;
};

export type GridRow = GridSquare[];

export interface IGamePlayContext {
  grid?: GridRow[];
  updateGrid: (grid: GridRow[]) => void;
  // setGameId: Dispatch<SetStateAction<string | null>>;
  setSize: Dispatch<SetStateAction<number>>;
}
