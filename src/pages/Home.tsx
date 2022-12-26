import { Link, useNavigate } from 'react-router-dom';

import { usePlayerContext } from '../context/PlayerContext';

export function Home(): JSX.Element {
  const navigate = useNavigate();
  const { name: playerName, setName } = usePlayerContext();

  const handleJoin = () => {
    const gameId = prompt('game id');
    if (gameId !== null) {
      navigate(`/lobby/${gameId}`);
    }
  };

  const handleLogIn = () => {
    const name = prompt('What should we call you?');
    if (name !== null) {
      setName(name);
    }
  };

  const handleLogOut = () => {
    setName(undefined);
  };

  return (
    <main>
      <h1>Home</h1>
      <div>{playerName}</div>

      <Link to="create">Create</Link>
      <button onClick={handleJoin} type="button">
        Join
      </button>

      <div>
        {playerName ? (
          <button onClick={handleLogOut} type="button">
            Log out
          </button>
        ) : (
          <button onClick={handleLogIn} type="button">
            Log in
          </button>
        )}
      </div>
    </main>
  );
}
