import { ChangeEvent } from 'react';

export type SymbolGridProps = {
	onClick: (id: string) => void;
	selectedSymbols: string[];
	symbols: { filename: string; id: string }[];
};
