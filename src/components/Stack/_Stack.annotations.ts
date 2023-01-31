import { ComponentType, ReactNode } from 'react';

type StackPropsBase = {
	children: ReactNode;
	className?: string;

	direction?: 'column' | 'row';
	spacingLevelHorizontal?: 0 | 1 | 2;
	spacingLevelVertical?: 0 | 1 | 2 | 3;

	// https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript
	tag?: ComponentType | keyof JSX.IntrinsicElements;
};

type StackPropsDefault = {
	shouldResetList?: never;
} & StackPropsBase;

type StackPropsResetList = {
	shouldResetList?: boolean;
	tag: 'ul' | 'ol';
} & StackPropsBase;

export type StackProps = StackPropsDefault | StackPropsResetList;
