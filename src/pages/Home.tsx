import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { usePlayerContext } from '../context/PlayerContext';
import { UserMgmt } from '../components/UserMgmt';

export function Home(): JSX.Element {
  const navigate = useNavigate();

  const handleJoin = () => {
    const gameId = prompt('game id');
    if (gameId !== null) {
      navigate(`/lobby/${gameId}`);
    }
  };

  return (
    <main>
      <h1>Home</h1>

      <Link to="create">Create</Link>
      <button onClick={handleJoin} type="button">
        Join
      </button>

      <div>
        <UserMgmt />
      </div>
    </main>
  );
}
