import { ResetList } from '../ResetList';
import { StackProps } from './_Stack.annotations';
import * as S from './_Stack.styled';

export function Stack({
	children,
	direction,
	shouldResetList = true,
	spacingLevelHorizontal,
	spacingLevelVertical,
	tag,
}: StackProps): JSX.Element {
	const isResettableList = tag === 'ol' || tag === 'ul';

	return (
		<S.Stack
			as={isResettableList && shouldResetList ? ResetList : tag}
			direction={direction}
			spacingLevelHorizontal={spacingLevelHorizontal}
			spacingLevelVertical={spacingLevelVertical}
		>
			{children}
		</S.Stack>
	);
}
