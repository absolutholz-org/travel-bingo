import { ReactNode } from 'react';

export type PromptDialogProps = {
	children: ReactNode;
	onClose: (value: string) => void;
	open: boolean;
};
