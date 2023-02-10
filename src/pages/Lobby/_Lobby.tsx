import { ReactNode } from 'react';

import { Container } from '../../components/Container';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export function Lobby({ children }: { children: ReactNode }): JSX.Element {
	return (
		<>
			<SiteHeader />

			<main>
				<Container>
					<h1>Game Lobby</h1>
				</Container>

				{children}
			</main>

			<SiteFooter />
		</>
	);
}
