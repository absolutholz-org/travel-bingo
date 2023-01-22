import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { CodeDialogProps } from './_CodeDialog.annotations';

export function CodeDialog({
	open,
	onCancel,
	onSubmit,
}: CodeDialogProps): JSX.Element {
	const [gameId, setGameId] = useState('');

	function handleGameIdChange(event: React.ChangeEvent<HTMLInputElement>) {
		setGameId(event.target.value);
	}

	return (
		<Dialog open={open} onClose={onCancel}>
			<DialogTitle>Game code</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Have a code from a friend? <br />
					Then enter it here.
				</DialogContentText>
				<TextField
					autoFocus
					fullWidth
					id="game"
					label="Game code"
					margin="dense"
					onChange={handleGameIdChange}
					required={true}
					type="text"
					variant="standard"
					value={gameId}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCancel}>Cancel</Button>
				<Button
					disabled={gameId === ''}
					onClick={() => onSubmit(gameId)}
				>
					Join
				</Button>
			</DialogActions>
		</Dialog>
	);
}
