export type SnackbarMessage = string;

export interface ISnackbarContext {
	notify: (message: SnackbarMessage) => void;
}
