import { ChangeEvent } from 'react';

export type WinningCombinationsProps = {
	combos: string[];
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
