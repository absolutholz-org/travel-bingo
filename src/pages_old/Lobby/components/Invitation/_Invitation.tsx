import { mdiAccount } from '@mdi/js';
import { useParams } from 'react-router-dom';
import { useSnackbarContext } from '../../../../context/SnackbarContext/_useSnackbarContext';

import { IInvitation } from './_Invitation.annotations';
import * as S from './_Invitation.styled';

export function Invitation({}: IInvitation): JSX.Element {
	const { gameId } = useParams();
	const { notify } = useSnackbarContext();

	const handleClick = async () => {
		const url = `${import.meta.env.VITE_APP_URL}/lobby/${gameId}`;

		if (navigator.share) {
			await navigator.share({
				title: 'Travel Bingo',
				text: gameId,
				url,
			});
			notify('shared successfully');
		} else {
			await navigator.clipboard.writeText(url);
			notify('copied successfully to clipboard');
		}
	};

	return (
		<S.Invitation onClick={handleClick} type="button">
			<S.Invitation_Icon path={mdiAccount} size={2} />
			<div>Invite a friend</div>
		</S.Invitation>
	);
}
