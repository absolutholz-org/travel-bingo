import { Stack } from '../../../../components/Stack';
import { Typography } from '../../../../components/Typography';
import { SelectableSymbol } from '../../../../pages_old/Create/components/SelectableSymbol';
import { SymbolGridProps } from './_SymbolGrid.annotations';
import * as S from './_SymbolGrid.styled';

export function SymbolGrid({
	onClick,
	selectedSymbols,
	symbols,
}: SymbolGridProps) {
	return (
		<Stack direction="column" spacingLevelVertical={1} tag="fieldset">
			<Typography as="legend" level={1}>
				Symbols
			</Typography>

			<S.SymbolGrid_List>
				{symbols.map(({ filename, id }) => (
					<SelectableSymbol
						filename={filename}
						id={id}
						isSelected={selectedSymbols.includes(id)}
						key={`sign_${id}`}
						onClick={() => onClick(id)}
					/>
				))}
			</S.SymbolGrid_List>
		</Stack>
	);
}
