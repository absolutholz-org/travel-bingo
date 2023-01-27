import { SelectableSymbol } from '../SelectableSymbol';
import { SymbolGridProps } from './_SymbolGrid.annotations';
import * as S from './_SymbolGrid.styled';

export function SymbolGrid({ onClick, selectedSigns, signs }: SymbolGridProps) {
	return (
		<fieldset>
			<legend>Included signs</legend>

			<S.SymbolGrid_List>
				{signs.map(({ filename, id, name }) => (
					<SelectableSymbol
						filename={filename}
						id={id}
						isSelected={selectedSigns.includes(id)}
						key={`sign_${id}`}
						name={name}
						onClick={() => onClick(id)}
					/>
				))}
			</S.SymbolGrid_List>
		</fieldset>
	);
}
