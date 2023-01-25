import Checkbox from '@mui/material/Checkbox';

import { Stack } from '../../../../components/Stack';
import { Typography } from '../../../../components/Typography';
import { WINNING_COMBINATIONS } from '../../../../Game.constants';
import { WinningCombinationsProps } from './_WinningCombinations.annotations';

export function WinningCombinations({
	combos,
	onChange,
}: WinningCombinationsProps): JSX.Element {
	return (
		<fieldset>
			<Typography as="legend" level={1}>
				Winning combinations
			</Typography>

			<Stack direction="row" spacingLevelVertical={0}>
				{WINNING_COMBINATIONS.map((combo) => (
					<label key={`combos_${combo}`} htmlFor={`combos_${combo}`}>
						<Checkbox
							checked={combos.includes(combo)}
							id={`combos_${combo}`}
							onChange={onChange}
							value={combo}
						/>
						<Typography as="span">{combo}</Typography>
					</label>
				))}
			</Stack>
		</fieldset>
	);
}
