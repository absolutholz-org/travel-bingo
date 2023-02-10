import { GridSquareStatus } from '../../../../context/GamePlayContext';

export type GridSquareSymbolProps = {
	description: string;
	id: string;
	name: string;
	onClick: () => void;
	status?: GridSquareStatus;
};
