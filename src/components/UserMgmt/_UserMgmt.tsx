import { usePlayerContext } from '../../context/PlayerContext';
import type { IUserMgmt } from './_UserMgmt.annotations';
import { useUserMgmt } from './_useUserMgmt';

export function UserMgmt({ onLogIn, onLogOut }: IUserMgmt): JSX.Element {
	const { player } = usePlayerContext();
	const { promptLogIn, logOut } = useUserMgmt();

	const handleLogIn = () => {
		const player = promptLogIn();
		if (player !== undefined && onLogIn) {
			onLogIn(player);
		}
	};

	const handleLogOut = () => {
		if (player !== null) {
			logOut();
			onLogOut && onLogOut(player!);
		}
	};

	return (
		<>
			{player?.name ? (
				<button onClick={handleLogOut} type="button">
					Log out
				</button>
			) : (
				<button onClick={handleLogIn} type="button">
					Log in
				</button>
			)}
		</>
	);
}
