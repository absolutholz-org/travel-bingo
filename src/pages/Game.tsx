import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FreeSpace } from '../components/FreeSpace';
import { GameGrid } from '../components/GameGrid';
import { SignButton } from '../components/SignButton/_SignButton';

import { useGameConfigContext } from '../context/GameConfigContext';
import {
  GamePlayContextProvider,
  useGamePlayContext,
} from '../context/GamePlayContext';
import { GridSquare } from '../context/GamePlayContext/_GamePlayContext.annotations';

export function Game(): JSX.Element {
  const { gameId } = useParams();

  if (gameId === undefined) return <></>;

  return (
    <GamePlayContextProvider gameId={gameId}>
      <_Game />
    </GamePlayContextProvider>
  );
}

function _Game(): JSX.Element {
  const { grid, updateGrid } = useGamePlayContext();

  const handleSignClick = (rowIndex: number, columnIndex: number) => {
    if (grid === undefined) return;

    grid[rowIndex][columnIndex].status = 'closed';
    updateGrid(grid);
    console.log({ grid, rowIndex, columnIndex });
  };

  const _GridSquare = ({
    gridSquare,
    rowIndex,
    columnIndex,
  }: {
    gridSquare: GridSquare;
    rowIndex: number;
    columnIndex: number;
  }): JSX.Element => {
    return (
      <>
        {gridSquare.id !== 'free' ? (
          <SignButton
            description={gridSquare.id}
            filename={gridSquare.filename}
            name={gridSquare.id}
            onClick={() => handleSignClick(rowIndex, columnIndex)}
            status={gridSquare.status}
          />
        ) : (
          <FreeSpace disabled>Free Space</FreeSpace>
        )}
      </>
    );
  };

  return (
    <main>
      <h1>Game</h1>

      {grid && (
        <GameGrid>
          {grid.map((gridRow, rowIndex) =>
            gridRow.map((gridSquare, columnIndex) => (
              <_GridSquare
                columnIndex={columnIndex}
                gridSquare={gridSquare}
                key={`bingo-grid_${rowIndex}x${columnIndex}`}
                rowIndex={rowIndex}
              />
            ))
          )}
        </GameGrid>
      )}
    </main>
  );
}
