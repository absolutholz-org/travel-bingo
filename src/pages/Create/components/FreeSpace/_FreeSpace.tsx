import Radio from '@mui/material/Radio';

import { Stack } from '../../../../components/Stack';
import { Typography } from '../../../../components/Typography';
import { FREE_SPACE_POSITION } from '../../../../Game.constants';
import { FreeSpaceProps } from './_FreeSpace.annotations';

export function FreeSpace({
	freeSpace,
	onChange,
}: FreeSpaceProps): JSX.Element {
	return (
		<fieldset>
			<Typography as="legend" level={1}>
				Free space
			</Typography>

			<Stack direction="row" spacingLevelVertical={0}>
				{FREE_SPACE_POSITION.map((space) => (
					<label
						htmlFor={`free-space_${space}`}
						key={`free-space_${space}`}
					>
						<Radio
							checked={freeSpace === space}
							id={`free-space_${space}`}
							name="free-space"
							onChange={onChange}
							value={space}
						/>
						{space}
					</label>
				))}
			</Stack>
		</fieldset>
	);
}
