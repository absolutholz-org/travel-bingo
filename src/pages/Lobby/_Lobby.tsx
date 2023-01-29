import Snackbar from '@mui/material/Snackbar';
import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { useGameConfigContext } from '../../context/GameConfigContext';
import { SnackbarContextProvider } from '../../context/SnackbarContext/_SnackbarContextProvider';

export function Lobby({ children }: { children: ReactNode }): JSX.Element {
	const { gameId } = useParams();
	const { setGameId } = useGameConfigContext();
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

	useEffect(() => {
		if (gameId !== undefined) {
			setGameId(gameId);
		}
	}, [gameId]);

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
		</SnackbarContextProvider>
	);
}
