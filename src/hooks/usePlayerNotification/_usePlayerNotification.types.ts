import type { Player } from '../../annotations/Player';

type NotificationAction = 'newplayer' | 'gamewon';

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

export type NotificationMessage = NewPlayerMessage | GameWonMessage;
