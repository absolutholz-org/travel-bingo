import { useContext } from 'react';

import SnackbarContext from './_SnackbarContext';

export function useSnackbarContext() {
	const context = useContext(SnackbarContext);

	if (context === undefined) {
		throw new Error(
			'useSnackbarContext must be used within a SnackbarContextProvider'
		);
	}

	const { notify } = context;

	return { notify };
}
