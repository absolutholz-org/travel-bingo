import { useParams } from 'react-router-dom';

export function Game(): JSX.Element {
  const { gameId } = useParams();

  return (
    <main>
      <h1>Game {gameId}</h1>
    </main>
  );
}
