import {
	GridSquare as GridSquareType,
	useGamePlayContext,
} from '../../../../context/GamePlayContext';
import { GridSquareFreeSpace } from '../GridSquareFreeSpace';
import { GridSquareSymbol } from '../GridSquareSymbol';

export const GridSquare = ({
	gridSquare: { id, filename, row, col, status },
}: {
	gridSquare: GridSquareType;
}): JSX.Element => {
	// const { dispatch } = useGamePlayContext();

	function handleSignClick() {
		// dispatch({
		// 	type: 'SymbolFound',
		// 	payload: {
		// 		row,
		// 		col,
		// 	},
		// });
	}

	return (
		<>
			{id !== 'free' ? (
				<GridSquareSymbol
					description={id}
					id={id}
					name={id}
					onClick={handleSignClick}
					status={status}
				/>
			) : (
				<GridSquareFreeSpace />
			)}
		</>
	);
};
