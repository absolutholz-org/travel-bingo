import styled from '@emotion/styled';
import Icon from '@mdi/react';

export const Invitation = styled.button`
	border: 2px solid;
	border-radius: 14px / 50%;
	display: grid;
	gap: 0.5rem;
	grid-template-columns: auto 1fr;
	padding: 0.25rem;
	text-align: inherit;
	width: 100%;
`;

export const Invitation_Icon = styled(Icon)`
	background-color: hsl(var(--on-surface) / 0.5);
	border-radius: 10px / 50%;
	color: hsl(var(--surface) / 0.5);
	padding: 0.25rem;
`;
