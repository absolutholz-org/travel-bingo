import { useParams } from 'react-router-dom';

export function Lobby(): JSX.Element {
  const { gameId } = useParams();

  const handleInvite = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Travel Bingo',
        text: gameId,
        url: `https://arcade.absolutholz.com/travelbingo/game/${gameId}`,
      });
      console.log('shared successfully');
    } else {
      await navigator.clipboard.writeText(
        `https://arcade.absolutholz.com/travelbingo/game/${gameId}`
      );
      console.log('shared successfully');
    }
  };

  return (
    <main>
      <h1>Game {gameId} lobby</h1>

      <button onClick={handleInvite} type="button">
        Invite a friend
      </button>
    </main>
  );
}
