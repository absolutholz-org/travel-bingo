import styled from '@emotion/styled';

export const Divider = styled.div`
	align-items: center;
	display: grid;
	gap: 1em;
	grid-template-columns: 1fr auto 1fr;

	&::before,
	&::after {
		background: hsl(var(--on-surface) / 0.4);
		content: '';
		display: block;
		height: 1px;
	}
`;

export const Divider_Content = styled.div`
	padding-bottom: 0.25em;
`;
