import styled from '@emotion/styled';

export const Signs_List = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
`;

export const Signs_Sign = styled.label`
	display: block;
	width: 100%;
`;

export const Signs_SignImage = styled.div`
	align-items: center;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
`;

export const Signs_SignLabel = styled.div`
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
