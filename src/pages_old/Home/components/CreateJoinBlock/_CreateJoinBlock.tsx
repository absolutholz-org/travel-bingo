import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import * as S from './_CreateJoinBlock.styled';
import { CodeDialog } from '../CodeDialog';

export function CreateJoinBlock(): JSX.Element {
	const navigate = useNavigate();
	const [openJoinDialog, setOpenJoinDialog] = useState(false);

	const handleJoin = (gameId: string) => {
		navigate(`/lobby/${gameId}`);
	};

	return (
		<S.CreateJoinBlock>
			<S.CreateJoinBlock_Headline as="h2" level={2}>
				Want to challenge a friend?
			</S.CreateJoinBlock_Headline>

			<Button
				component={Link}
				size="large"
				to="create"
				variant="contained"
			>
				Create a Game
			</Button>

			<S.CreateJoinBlock_Divider>or</S.CreateJoinBlock_Divider>

			<S.CreateJoinBlock_Headline as="h2" level={2}>
				Have a code?
			</S.CreateJoinBlock_Headline>

			<Button
				onClick={() => setOpenJoinDialog(true)}
				size="large"
				variant="contained"
			>
				Join a Game
			</Button>

			<CodeDialog
				open={openJoinDialog}
				onCancel={() => setOpenJoinDialog(false)}
				onSubmit={handleJoin}
			/>
		</S.CreateJoinBlock>
	);
}
