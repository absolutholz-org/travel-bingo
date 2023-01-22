import { css } from '@emotion/react';
import styled from '@emotion/styled';

type FontLevel = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

// https://type-scale.com/
function fontDefinition(level: FontLevel = 0): {
	fontSize: string;
	lineHeight: number;
} {
	switch (level) {
		case 6:
			return { fontSize: '5.61rem', lineHeight: 1.2 };
		case 5:
			return { fontSize: '4.209rem', lineHeight: 1.2 };
		case 4:
			return { fontSize: '3.157rem', lineHeight: 1.3 };
		case 3:
			return { fontSize: '2.369rem', lineHeight: 1.3 };
		case 2:
			return { fontSize: '1.777rem', lineHeight: 1.4 };
		case 1:
			return { fontSize: '1.333rem', lineHeight: 1.45 };
		case -1:
			return { fontSize: '0.75rem', lineHeight: 1.5 };
	}
	return { fontSize: '1rem', lineHeight: 1.5 };
}

export const Typography = styled.div<{ level?: FontLevel }>`
	${({ level = 0 }) =>
		css`
			font: normal ${fontDefinition(level).fontSize} /
				${fontDefinition(level).lineHeight} var(--font);
		`};
`;
