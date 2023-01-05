import { usePubNub } from 'pubnub-react';
import { useEffect, useState } from 'react';

import type { NotificationMessage } from './_usePlayerNotification.types';

export function usePlayerNotification(
	gameId: string,
	listener: ({ message }: { message: NotificationMessage }) => void
) {
	const pubnub = usePubNub();
	const [channels] = useState([`travel-bingo_${gameId}`]);

	useEffect(() => {
		pubnub.addListener({ message: listener });
		pubnub.subscribe({ channels });
	}, [pubnub, channels]);

	return {
		notifyPlayers: (message: NotificationMessage) => {
			pubnub.publish({
				channel: channels[0],
				message,
			});
		},
	};
}
