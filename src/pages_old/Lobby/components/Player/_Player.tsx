import { mdiAirplane } from '@mdi/js';
import { PlayerProps } from './_Player.annotations';
import * as S from './_Player.styled';

export function Player({ player }: PlayerProps): JSX.Element {
	const { id, name, avatar } = player;

	return (
		<S.Player>
			<S.Player_Icon path={mdiAirplane} size={2} />
			<div>{name}</div>
		</S.Player>
	);
}
