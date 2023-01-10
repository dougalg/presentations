import { Heading } from '../../components/Heading/Heading';
import { HeadingSection } from '../../components/Heading/HeadingSection';

export const SiteHeader = (): JSX.Element => (
	<header>
		<Heading>Minerva</Heading>
		<HeadingSection>
			<Heading level={2} id="nav-header" className="screenreader-only">
				Site Navigation
			</Heading>
		</HeadingSection>
		<nav aria-labelledby="nav-header">
			<a href="/">Demos</a>
			<a href="/">Features</a>
			<a href="/">Posts</a>
			<a href="/">Categories</a>
		</nav>
	</header>
);
