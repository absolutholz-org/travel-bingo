import { BillboardProps } from './_Billboard.annotations';
import * as S from './_Billboard.styled';

export function Billboard({ children }: BillboardProps): JSX.Element {
	return <S.Billboard>{children}</S.Billboard>;
}
