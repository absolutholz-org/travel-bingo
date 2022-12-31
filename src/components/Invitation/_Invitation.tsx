import { IInvitation } from './_Invitation.annotations';

export function Invitation({ gameId }: IInvitation): JSX.Element {
  const handleClick = async () => {
    const url = `${import.meta.env.VITE_APP_URL}/lobby/${gameId}`;

    if (navigator.share) {
      await navigator.share({
        title: 'Travel Bingo',
        text: gameId,
        url,
      });
      console.log('shared successfully');
    } else {
      await navigator.clipboard.writeText(url);
      console.log('copied successfully to clipboard');
    }
  };

  return (
    <button onClick={handleClick} type="button">
      Invite a friend
    </button>
  );
}
