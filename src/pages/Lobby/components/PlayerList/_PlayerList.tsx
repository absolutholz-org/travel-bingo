import { MAXIMUM_PLAYERS_ALLOWED } from '../../../../Game.constants';
import { Invitation } from '../Invitation';
import { PlayerListProps } from './_PlayerList.annotations';
import * as S from './_PlayerList.styled';

export function PlayerList({ players }: PlayerListProps): JSX.Element {
	return (
		<S.PlayerList as="ul">
			{players &&
				players.map(({ id, name }) => (
					<li key={`lobby-player_${id}`}>{name}</li>
				))}

			{[...Array(MAXIMUM_PLAYERS_ALLOWED - (players?.length ?? 0))].map(
				(_: undefined, index: number) => (
					<li key={`lobby-player-slot_${index}`}>
						<Invitation />
					</li>
				)
			)}
		</S.PlayerList>
	);
}
