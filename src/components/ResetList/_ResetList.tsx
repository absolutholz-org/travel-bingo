import { Children } from 'react';
import { ResetListProps } from './_ResetList.annotations';
import * as S from './_ResetList.styled';

export function ResetList({
	children,
	className,
	tag,
}: ResetListProps): JSX.Element {
	return (
		<S.ResetList as={tag} className={className} role="list">
			{Children.map(children, (child) => (
				<li>{child}</li>
			))}
		</S.ResetList>
	);
}
