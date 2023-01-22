import type { PageHeadlineProps } from './_PageHeadline.annotations';
import * as S from './_PageHeadline.styled';

export function PageHeadline({ children }: PageHeadlineProps): JSX.Element {
	return (
		<S.PageHeadline as="h1" level={6}>
			{children}
		</S.PageHeadline>
	);
}
