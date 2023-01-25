import { ChangeEvent } from 'react';

export type SignsProps = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	selectedSigns: string[];
	signs: { filename: string; id: string; name: { de: string } }[];
};
