import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { usePlayerContext } from '../context/PlayerContext';
import { useGameConfigContext } from '../context/GameConfigContext';

export function Create(): JSX.Element {
  const navigate = useNavigate();
  const { player } = usePlayerContext();
  const { setGameId, setHost, setPlayers, setParameters } =
    useGameConfigContext();

  const handleCreateGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const gameId = nanoid(5);

    setGameId(gameId);
    setPlayers(player === null ? [] : [player]);
    setHost(player);
    setParameters({
      size: 5,
      symbols: ['stop', 'yield'],
    });

    navigate(`/lobby/${gameId}/host`);
  };

  return (
    <main>
      <h1>Create</h1>

      <div>{player?.name}</div>

      <form onSubmit={handleCreateGame}>
        <label htmlFor="location">
          <div>Location</div>
          <select id="location">
            <option value="germany">Germany</option>
          </select>
        </label>

        <fieldset>
          <legend>Signs</legend>

          <label htmlFor="sign_x">
            <input id="sign_x" type="checkbox" />
            <div>Sign X</div>
          </label>
        </fieldset>

        <button disabled={player === undefined} type="submit">
          Create
        </button>
      </form>
    </main>
  );
}
