import { ResetList } from '../ResetList';
import { StackProps } from './_Stack.annotations';
import * as S from './_Stack.styled';

export function Stack({
	children,
	className,
	direction = 'row',
	shouldResetList = true,
	spacingLevelHorizontal,
	spacingLevelVertical,
	tag = 'div',
}: StackProps): JSX.Element {
	const isResettableList = tag === 'ol' || tag === 'ul' || tag === 'menu';

	return (
		<S.Stack
			as={isResettableList && shouldResetList ? ResetList : tag}
			className={className}
			direction={direction}
			spacingLevelHorizontal={spacingLevelHorizontal}
			spacingLevelVertical={spacingLevelVertical}
		>
			{children}
		</S.Stack>
	);
}
