import { Container } from '../../components/Container';
// import { UserMgmt } from '../../components/UserMgmt';
import { CreateJoinBlock } from './components/CreateJoinBlock';
import { PageHeadline } from './components/PageHeadline';

export function Home(): JSX.Element {
	return (
		<>
			<main>
				<Container>
					<PageHeadline>Travel Bingo</PageHeadline>
				</Container>

				<Container>
					<CreateJoinBlock />
				</Container>
			</main>

			{/* <Container as="footer">
				<UserMgmt />
			</Container> */}
		</>
	);
}
