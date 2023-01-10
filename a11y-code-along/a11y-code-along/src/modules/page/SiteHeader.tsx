import { Heading } from '../../components/Heading/Heading';
import { HeadingSection } from '../../components/Heading/HeadingSection';
import { SiteNav } from './SiteNav';

export const SiteHeader = (): JSX.Element => (
	<header>
		<Heading>Minerva</Heading>
		<HeadingSection>
			<Heading level={2} id="nav-header" className="screenreader-only">
				Site Navigation
			</Heading>
		</HeadingSection>
		<SiteNav aria-labelledby="nav-header" />
	</header>
);
