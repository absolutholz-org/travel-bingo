import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { usePlayerContext } from '../context/PlayerContext';

export function Create(): JSX.Element {
  usePlayerContext();
  const navigate = useNavigate();

  const handleCreateGame = () => {
    navigate(`/lobby/${nanoid(5)}`);
  };

  return (
    <main>
      <h1>Create</h1>

      <form onSubmit={handleCreateGame}>
        <label htmlFor="location">
          <div>Location</div>
          <select id="location">
            <option selected value="germany">
              Germany
            </option>
          </select>
        </label>

        <fieldset>
          <legend>Signs</legend>

          <label htmlFor="sign_x">
            <input id="sign_x" type="checkbox" />
            <div>Sign X</div>
          </label>
        </fieldset>

        <button type="submit">Create</button>
      </form>
    </main>
  );
}
