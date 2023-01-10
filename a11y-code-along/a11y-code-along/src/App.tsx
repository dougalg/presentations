import './App.css';
import { Heading } from './components/Heading';

function App() {
	return (
		<div className="App">
			<header>
				<Heading level={1}>Minerva</Heading>
				<Heading level={2} id="nav-header">
					Site Navigation
				</Heading>
				<nav aria-labelledby="nav-header">
					<a href="/">Demos</a>
					<a href="/">Features</a>
					<a href="/">Posts</a>
					<a href="/">Categories</a>
				</nav>
			</header>
			<main>
				<section>
					<Heading level={2}>Popular Articles</Heading>
				</section>
				<section>
					<Heading level={2}>Editor&lsquo;s Choice</Heading>
				</section>
				<section>
					<Heading level={2}>Latest Posts</Heading>
				</section>
			</main>
			<footer>This is a footer</footer>
		</div>
	);
}

export default App;
