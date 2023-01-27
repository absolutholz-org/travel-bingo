import { StickyFooterProps } from './_StickyFooter.annotations';
import * as S from './_StickyFooter.styled';

export function StickyFooter({
	isButtonDisabled,
}: StickyFooterProps): JSX.Element {
	return (
		<S.StickyFooter>
			<S.StickyFooter_Button
				disabled={isButtonDisabled}
				type="submit"
				variant="contained"
			>
				Create
			</S.StickyFooter_Button>
		</S.StickyFooter>
	);
}
