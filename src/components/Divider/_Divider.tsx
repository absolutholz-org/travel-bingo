import type { DividerProps } from './_Divider.annotations';
import * as S from './_Divider.styled';

export function Divider({ children }: DividerProps): JSX.Element {
	return (
		<S.Divider>
			<S.Divider_Content>{children}</S.Divider_Content>
		</S.Divider>
	);
}
