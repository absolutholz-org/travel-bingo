import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { nanoid } from 'nanoid';

import { Container } from '../../components/Container';
import { useGameConfigContext } from '../../context/GameConfigContext';
import { usePlayerContext } from '../../context/PlayerContext';
import { SnackbarContextProvider } from '../../context/SnackbarContext/_SnackbarContextProvider';
import { PlayerDialog } from './components/PlayerDialog';

export function Lobby({ children }: { children: ReactNode }): JSX.Element {
	const { gameId } = useParams();
	const { setGameId, addPlayer } = useGameConfigContext();
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
	const { player, setPlayer } = usePlayerContext();
	const [isOpenPlayerDialog, setIsOpenPlayerDialog] = useState(false);

	useEffect(() => {
		if (gameId !== undefined) {
			setGameId(gameId);
		}
	}, [gameId]);

	// useEffect(() => {
	// 	console.log({ player }, 'load');
	// }, []);

	// useEffect(() => {
	// 	if (player === null) {
	// 		console.log({ player }, 'effect');
	// 		setIsOpenPlayerDialog(true);
	// 	}
	// }, [player]);

	// // console.log({ player }, 'other');

	// function handlePlayerDialogClose({ name }: { name?: string }) {
	// 	if (name) {
	// 		const player = { name, id: nanoid() };
	// 		setPlayer(player);
	// 		addPlayer(player);
	// 		setIsOpenPlayerDialog(false);
	// 	}
	// }

	return (
		<SnackbarContextProvider>
			<main>
				<Container>
					<h1>Game {gameId} lobby</h1>
					{children}
				</Container>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={isSnackbarOpen}
					onClose={() => setIsSnackbarOpen(false)}
					message="I love snacks"
				/>
			</main>
			{/* <PlayerDialog
				open={isOpenPlayerDialog}
				onClose={handlePlayerDialogClose}
			/> */}
		</SnackbarContextProvider>
	);
}
