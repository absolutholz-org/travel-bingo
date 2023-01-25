import { css } from '@emotion/react';
import styled from '@emotion/styled';

const tokens = {
	spacing: {
		horizontal: [0, '1rem', '1.5rem', '2rem'],
		vertical: [0, '0.5rem', '1.25rem', '2rem', '3.5rem'],
	},
};

export const Stack = styled.div<{
	direction?: 'column' | 'row';
	spacingLevelHorizontal?: 0 | 1 | 2;
	spacingLevelVertical?: 0 | 1 | 2 | 3;
}>`
	display: flex;
	flex-flow: ${({ direction = 'column' }) => direction} wrap;

	${({ spacingLevelHorizontal = 1, spacingLevelVertical = 1 }) => css`
		gap: ${tokens.spacing.vertical[spacingLevelVertical]}
			${tokens.spacing.horizontal[spacingLevelHorizontal]};
	`}
`;
