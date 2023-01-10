import { ReactNode } from 'react';

export interface IButton {
	children: ReactNode;
	isDisabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}
