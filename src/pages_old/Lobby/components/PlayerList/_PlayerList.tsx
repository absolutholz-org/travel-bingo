import { MAXIMUM_PLAYERS_ALLOWED } from '../../../../Game.constants';
import { Invitation } from '../Invitation';
import { Player } from '../Player';
import { PlayerListProps } from './_PlayerList.annotations';
import * as S from './_PlayerList.styled';

export function PlayerList({ players }: PlayerListProps): JSX.Element {
	return (
		<S.PlayerList tag="ul">
			{players &&
				players.map((player) => (
					<Player key={`lobby-player_${player.id}`} player={player} />
				))}

			{[...Array(MAXIMUM_PLAYERS_ALLOWED - (players?.length ?? 0))].map(
				(_: undefined, index: number) => (
					<Invitation key={`lobby-player-slot_${index}`} />
				)
			)}
		</S.PlayerList>
	);
}
