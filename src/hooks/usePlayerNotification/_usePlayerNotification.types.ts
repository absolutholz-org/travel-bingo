import type { Player } from '../../annotations/Player';

type NotificationAction = 'newplayer' | 'gamewon' | 'matchedsign';

type NotificationMessageBase = {
	action: NotificationAction;
	data: unknown;
};

interface NewPlayerMessage extends NotificationMessageBase {
	action: 'newplayer';
	data: {
		player: Player;
	};
}

interface GameWonMessage extends NotificationMessageBase {
	action: 'gamewon';
	data: {
		player: Player;
	};
}

interface MatchedSignMessage extends NotificationMessageBase {
	action: 'matchedsign';
	data: {
		player: Player;
		sign: {
			id: string;
		};
	};
}

export type NotificationMessage =
	| NewPlayerMessage
	| GameWonMessage
	| MatchedSignMessage;
