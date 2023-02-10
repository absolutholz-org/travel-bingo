import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SelectableSymbol = styled.button<{
	isSelected: boolean;
}>`
	background: hsl(0deg 0% 100% / 0.1);
	border: 2px solid hsl(0deg 0% 100% / 0.2);
	border-radius: 0.25rem;
	padding: 0.25rem;
	transition: border-color 300ms;

	${({ isSelected }) =>
		!isSelected &&
		css`
			border-color: transparent;
		`}

	&:focus-visible {
		outline: 2px solid hsl(var(--accent));
		outline-offset: 2px;
	}
`;

export const SelectableSymbol_ImageContainer = styled.div<{
	isSelected: boolean;
}>`
	align-items: center;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	transition: opacity 300ms, filter 300ms;

	${({ isSelected }) =>
		!isSelected &&
		css`
			filter: grayscale(1);
			opacity: 0.5;
		`}
`;

export const SelectableSymbol_Image = styled.img`
	height: 100%;
	object-fit: contain;
	width: 100%;
`;
