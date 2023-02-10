import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { Billboard } from '../../components/Billboard';
import { Container } from '../../components/Container';
import { PageSection } from '../../components/PageSection';
import { SiteFooter } from '../../components/SiteFooter';

export function Home(): JSX.Element {
	return (
		<>
			<main>
				<Billboard>
					<Container>
						<h1>Travel Bingo</h1>
					</Container>
				</Billboard>

				<PageSection>
					<Container>
						<Button
							component={Link}
							to="create"
							variant="contained"
						>
							Create a game
						</Button>
					</Container>
				</PageSection>
			</main>

			<SiteFooter />
		</>
	);
}
