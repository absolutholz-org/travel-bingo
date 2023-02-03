import styled from '@emotion/styled';

export const FreeSpace = styled.button`
	align-items: center;
	background-color: transparent;
	background-image: linear-gradient(
		135deg,
		hsl(0 0% 50% / 0.2) calc(50% - 1.5rem),
		transparent calc(50% - 1.5rem),
		transparent calc(50% + 1.5rem),
		hsl(0 0% 50% / 0.2) calc(50% + 1.5rem)
	);
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
`;

export const FreeSpace_Text = styled.div`
	font-weight: 500;
	letter-spacing: 0.2ch;
	line-height: 1;
	text-transform: uppercase;
	transform: rotate(-45deg);
`;
