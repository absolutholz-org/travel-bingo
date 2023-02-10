export type CodeDialogProps = {
	open: boolean;
	onCancel: () => void;
	onSubmit: (gameId: string) => void;
};
