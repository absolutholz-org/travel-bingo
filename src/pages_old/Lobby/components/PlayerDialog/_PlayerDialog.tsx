import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import { PlayerDialogProps } from './_PlayerDialog.annotations';
import DialogContentText from '@mui/material/DialogContentText';

export function PlayerDialog({
	onClose,
	open,
}: PlayerDialogProps): JSX.Element {
	const [name, setName] = useState<string>('');

	function handleNameFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
		setName(event.target.value.trim());
	}

	function handleClose() {
		onClose({ name });
	}

	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>Player</DialogTitle>
			<DialogContent>
				<DialogContentText>
					How would you like to appear?
				</DialogContentText>
				<TextField
					autoFocus={true}
					fullWidth
					label="name"
					margin="dense"
					onChange={handleNameFieldChange}
					value={name}
				/>
			</DialogContent>
			<DialogActions>
				<Button disabled={!name} onClick={handleClose}>
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
}
