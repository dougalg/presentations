import './App.css';
import { Heading } from './components/Heading/Heading';
import { HeadingSection } from './components/Heading/HeadingSection';

function App() {
	return (
		<HeadingSection tag="div" className="App">
			<header>
				<Heading>Minerva</Heading>
				<HeadingSection>
					<Heading level={2} id="nav-header">
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
			<main>
				<HeadingSection tag="section">
					<Heading>Popular Articles</Heading>
				</HeadingSection>
				<HeadingSection tag="section">
					<Heading level={2}>Editor&lsquo;s Choice</Heading>
				</HeadingSection>
				<HeadingSection tag="section">
					<Heading level={2}>Latest Posts</Heading>
				</HeadingSection>
			</main>
			<footer>This is a footer</footer>
		</HeadingSection>
	);
}

export default App;
