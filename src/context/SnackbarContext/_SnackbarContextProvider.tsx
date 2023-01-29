import { Snackbar } from '@mui/material';
import { ReactNode, useState } from 'react';

import SnackbarContext from './_SnackbarContext';
import { SnackbarMessage } from './_SnackbarContext.annotations';

export const SnackbarContextProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');

	function handleClose() {
		setOpen(false);
	}

	function notify(message: SnackbarMessage) {
		setMessage(message);
		setOpen(true);
	}

	return (
		<SnackbarContext.Provider
			value={{
				notify,
			}}
		>
			{children}
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				autoHideDuration={6000}
				message={message}
				onClose={handleClose}
				open={open}
			/>
		</SnackbarContext.Provider>
	);
};
