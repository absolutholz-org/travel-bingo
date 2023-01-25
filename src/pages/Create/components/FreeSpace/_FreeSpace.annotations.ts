import { ChangeEvent } from 'react';

export type FreeSpaceProps = {
	freeSpace: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
