export type SelectableSymbolProps = {
	filename: string;
	id: string;
	name: { de: string };
	isSelected: boolean;
	onClick: () => void;
};
