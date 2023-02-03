export type PlayerDialogProps = {
	onClose: ({ name }: { name?: string }) => void;
	open: boolean;
};
