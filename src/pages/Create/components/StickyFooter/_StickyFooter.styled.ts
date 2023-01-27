import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const StickyFooter = styled.div`
	background-color: hsl(var(--surface));
	bottom: 0;
	margin: 1rem -0.75rem 0;
	position: sticky;
	padding: 0.5rem 0.75rem;
`;

export const StickyFooter_Button = styled(Button)`
	width: min(100%, 50rem);
`;
