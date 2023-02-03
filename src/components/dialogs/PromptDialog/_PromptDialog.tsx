import { useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	TextField,
} from '@mui/material';

import { PromptDialogProps } from './_PromptDialog.annotations';

export function PromptDialog({
	children,
	onClose,
	open,
}: PromptDialogProps): JSX.Element {
	const [value, setValue] = useState('');

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value);
	}

	function handleClose() {
		onClose(value);
	}

	return (
		<Dialog open={open}>
			<DialogContent>
				{children}
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="text"
					fullWidth
					variant="standard"
					value={value}
					onChange={handleChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Subscribe</Button>
			</DialogActions>
		</Dialog>
	);
}
