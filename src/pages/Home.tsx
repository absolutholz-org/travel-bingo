import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { UserMgmt } from '../components/UserMgmt';
import { Text } from '../components/Text';
import { Divider } from '../components/Divider';

export function Home(): JSX.Element {
	const navigate = useNavigate();

	const handleJoin = () => {
		const gameId = prompt('game id');
		if (gameId !== null) {
			navigate(`/lobby/${gameId}`);
		}
	};

	return (
		<main>
			<Container>
				<Text as="h1" level={6}>
					Travel Bingo
				</Text>

				<Text as="h2" level={2}>
					Want to challenge a friend?
				</Text>
				<Link to="create">
					<Button>Create a Game</Button>
				</Link>

				<Divider>or</Divider>

				<Text as="h2" level={2}>
					Have a code?
				</Text>
				<button onClick={handleJoin} type="button">
					<Button>Join a Game</Button>
				</button>

				<div>
					<UserMgmt />
				</div>
			</Container>
		</main>
	);
}
