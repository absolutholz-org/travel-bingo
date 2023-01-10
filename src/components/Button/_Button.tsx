import type { IButton } from './_Button.annotations';
import * as S from './_Button.styled';

export function Button({ children }: IButton): JSX.Element {
	return <S.Button>{children}</S.Button>;
}
