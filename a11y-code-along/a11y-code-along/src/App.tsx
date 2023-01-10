import './App.css';
import { HeadingSection } from './components/Heading/HeadingSection';
import { HomePage } from './modules/home/HomePage';
import { SiteFooter } from './modules/page/SiteFooter';
import { SiteHeader } from './modules/page/SiteHeader';

function App() {
	return (
		<HeadingSection tag="div" className="App">
			<SiteHeader />
			<main>
				<HomePage />
			</main>
			<SiteFooter />
		</HeadingSection>
	);
}

export default App;
