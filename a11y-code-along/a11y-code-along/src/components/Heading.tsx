import { ReactNode } from 'react';

type HeadingProps = {
	level: number;
	children: ReactNode;
};

export const Heading = ({ level, children }: HeadingProps): JSX.Element => {
	const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
	return <HeadingTag>{children}</HeadingTag>;
};
