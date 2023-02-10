import styled from '@emotion/styled';
import Icon from '@mdi/react';

export const Player = styled.div`
	border: 2px solid;
	border-radius: 14px / 50%;
	padding: 0.25rem;
	display: grid;
	gap: 0.5rem;
	grid-template-columns: auto 1fr;
`;

export const Player_Icon = styled(Icon)`
	background-color: hsl(var(--on-surface));
	border-radius: 10px / 50%;
	color: hsl(var(--surface));
	padding: 0.25rem;
`;
