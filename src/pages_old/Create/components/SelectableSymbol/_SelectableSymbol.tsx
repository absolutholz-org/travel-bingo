import { SIGN_DIRECTORY } from '../../../../Game.constants';
import { SelectableSymbolProps } from './_SelectableSymbol.annotations';
import * as S from './_SelectableSymbol.styled';

export function SelectableSymbol({
	filename,
	id,
	isSelected,
	onClick,
}: SelectableSymbolProps): JSX.Element {
	return (
		<S.SelectableSymbol
			isSelected={isSelected}
			onClick={onClick}
			type="button"
		>
			<S.SelectableSymbol_ImageContainer isSelected={isSelected}>
				<S.SelectableSymbol_Image
					alt={id}
					loading="lazy"
					src={`${SIGN_DIRECTORY}germany/${filename}`}
				/>
			</S.SelectableSymbol_ImageContainer>
		</S.SelectableSymbol>
	);
}
