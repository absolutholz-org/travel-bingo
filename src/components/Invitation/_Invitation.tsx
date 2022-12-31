import { IInvitation } from './_Invitation.annotations';

export function Invitation({ gameId }: IInvitation): JSX.Element {
  const handleClick = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Travel Bingo',
        text: gameId,
        url: `https://arcade.absolutholz.com/travelbingo/lobby/${gameId}`,
      });
      console.log('shared successfully');
    } else {
      await navigator.clipboard.writeText(
        `https://arcade.absolutholz.com/travelbingo/lobby/${gameId}`
      );
      console.log('copied successfully to clipboard');
    }
  };

  return (
    <button onClick={handleClick} type="button">
      Invite a friend
    </button>
  );
}
