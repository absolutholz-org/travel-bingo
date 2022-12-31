import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fileURLToPath } from 'url';
import { FreeSpace } from '../components/FreeSpace';
import { GameGrid } from '../components/GameGrid';
import { SignButton } from '../components/SignButton/_SignButton';

import { useGameConfigContext } from '../context/GameConfigContext';
import { useGamePlayContext } from '../context/GamePlayContext';

export function Game(): JSX.Element {
  const { gameId } = useParams();
  const { parameters } = useGameConfigContext();
  const { grid, updateGrid } = useGamePlayContext();

  useEffect(() => {}, [parameters]);

  const handleSignClick = (rowIndex: number, columnIndex: number) => {
    if (grid === undefined) return;

    grid[rowIndex][columnIndex].status = 'closed';
    updateGrid(grid);
    console.log({ grid, rowIndex, columnIndex });
  };

  return (
    <main>
      <h1>Game {gameId}</h1>

      {grid && (
        <GameGrid>
          {grid.map((gridRow, rowIndex) =>
            gridRow.map((gridSquare, columnIndex) => (
              <>
                {gridSquare.id !== 'free' ? (
                  <SignButton
                    description={gridSquare.id}
                    file={gridSquare.file}
                    key={`bingo-grid_${rowIndex}x${columnIndex}`}
                    name={gridSquare.id}
                    onClick={() => handleSignClick(rowIndex, columnIndex)}
                    status={gridSquare.status}
                  />
                ) : (
                  <FreeSpace>Free Space</FreeSpace>
                )}
              </>
            ))
          )}
        </GameGrid>
      )}
    </main>
  );
}
