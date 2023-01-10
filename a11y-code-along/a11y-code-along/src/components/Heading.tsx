type HeadingProps = {
	level: number;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ level, children, ...otherProps }: HeadingProps): JSX.Element => {
	const HeadingTag = `h${level}`;
	return <HeadingTag {...otherProps}>{children}</HeadingTag>;
};
