import { css, Global } from '@emotion/react';

const lightColorSchemeCSS = css`
	--surface: 60 100% 98%;
	--on-surface: 0 0% 10%;

	--surface-alt1: 0 0% 97;
	--on-surface-alt1: 0 0% 10%;

	--accent: 203 100% 39%;
	--on-accent: 0 100% 100%;
`;

const darkColorSchemeCSS = css`
	--surface: 0 0% 10%;
	--on-surface: 60 100% 98%;

	--surface-alt1: 0 0% 97;
	--on-surface-alt1: 0 0% 10%;

	--accent: 207 90% 61%;
	--on-accent: 0 100% 100%;
`;

const globalThemeStyles = css`
	:root {
		${lightColorSchemeCSS}

		&[data-color-scheme="dark"] {
			${darkColorSchemeCSS}
		}

		@media (prefers-color-scheme: dark) {
			&:not([data-color-scheme='light']) {
				${darkColorSchemeCSS}
			}
		}

		background: hsl(var(--surface));
		color: hsl(var(--on-surface));
		font: normal 1em / 1.4 Tahoma, sans-serif;
	}

	a {
		color: hsl(var(--accent));
	}
`;

export const GlobalTheme = (): JSX.Element => {
	return <Global styles={globalThemeStyles} />;
};
