import { ReactNode } from 'react';

export type ResetListProps = {
	children: ReactNode;
	className: string;
	tag?: 'ul' | 'ol';
};
