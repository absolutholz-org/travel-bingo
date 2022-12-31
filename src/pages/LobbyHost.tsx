import { usePubNub } from 'pubnub-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { Player } from '../annotations/Player';
import { Invitation } from '../components/Invitation';
import { useGameConfigContext } from '../context/GameConfigContext/_useGameConfigContext';
import { usePlayerContext } from '../context/PlayerContext';
import { MAXIMUM_PLAYERS_ALLOWED } from '../Game.constants';

export const enum MessageAction {
  NewJoiner = 'new joiner',
  UpdatePlayerList = 'players updated',
}

type NewPlayerMessage = {
  action: MessageAction.NewJoiner;
  player: Player;
};

export function LobbyHost(): JSX.Element {
  const { gameId } = useParams();
  const { setGameId, players, addPlayer } = useGameConfigContext();

  const pubnub = usePubNub();
  const [channels] = useState([`travel-bingo_${gameId}`]);

  const handleMessage = ({ message }: { message: NewPlayerMessage }) => {
    console.log('handling message', { message });

    if (message.action === MessageAction.NewJoiner) {
      console.log({ message });
      addPlayer(message.player);
    }
  };

  useEffect(() => {
    pubnub.addListener({ message: handleMessage });
    pubnub.subscribe({ channels });
  }, [pubnub, channels]);

  useEffect(() => {
    if (gameId !== undefined) {
      setGameId(gameId);
    }
  }, [gameId]);

  useEffect(() => {
    console.log({ players });
    pubnub.publish({
      channel: channels[0],
      message: {
        action: MessageAction.UpdatePlayerList,
        players,
      },
    });
  }, [players]);

  return (
    <main>
      <h1>Game {gameId} lobby</h1>

      {gameId && (
        <ul>
          {players &&
            players.map(({ id, name }) => (
              <li key={`lobby-player_${id}`}>{name}</li>
            ))}

          {[...Array(MAXIMUM_PLAYERS_ALLOWED - (players?.length ?? 0))].map(
            (_: undefined, index: number) => (
              <li key={`lobby-player-slot_${index}`}>
                <Invitation gameId={gameId} />
              </li>
            )
          )}
        </ul>
      )}
    </main>
  );
}
