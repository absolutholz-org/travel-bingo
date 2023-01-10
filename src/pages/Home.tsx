import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { UserMgmt } from '../components/UserMgmt';

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
				<h1>Travel Bingo</h1>

				<div>
					<div>Want to challenge a friend?</div>
					<Link to="create">
						<Button>Create a Game</Button>
					</Link>
				</div>
				<div>or</div>
				<div>
					Have a code?
					<button onClick={handleJoin} type="button">
						<Button>Join a Game</Button>
					</button>
				</div>

				<div>
					<UserMgmt />
				</div>
			</Container>
		</main>
	);
}
