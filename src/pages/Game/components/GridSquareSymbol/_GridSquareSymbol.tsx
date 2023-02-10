import { SIGN_DIRECTORY } from '../../../../Game.constants';
import { GridSquareSymbolProps } from './_GridSquareSymbol.annotations';
import * as S from './_GridSquareSymbol.styled';

import configJson from '../../../../configs/germany';

export function GridSquareSymbol({
	description,
	id,
	name,
	onClick,
	status = 'open',
}: GridSquareSymbolProps): JSX.Element {
	const handleClick = () => {
		if (status === 'open') {
			onClick();
		}
	};

	const filename = configJson.symbols.find(
		(symbol) => symbol.id === id
	).filename;

	return (
		<S.GridSquareSymbol
			// disabled={status === 'closed'}
			onClick={handleClick}
			type="button"
		>
			<S.GridSquareSymbol_Symbol
				src={`${SIGN_DIRECTORY}germany/${filename}`}
				alt={description}
			/>
			{status === 'closed' && (
				<S.GridSquareSymbol_Check
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
						fill="currentColor"
					/>
				</S.GridSquareSymbol_Check>
			)}
		</S.GridSquareSymbol>
	);
}
