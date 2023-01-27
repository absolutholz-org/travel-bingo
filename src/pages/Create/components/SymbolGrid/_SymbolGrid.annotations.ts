import { ChangeEvent } from 'react';

export type SymbolGridProps = {
	onClick: (id: string) => void;
	selectedSigns: string[];
	signs: { filename: string; id: string; name: { de: string } }[];
};
