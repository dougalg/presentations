import './App.css';

function App() {
	return (
		<div className="App">
			<header>
				<h1>Minerva</h1>
				<h2 id="nav-header">Site Navigation</h2>
				<nav aria-labelledby="nav-header">
					<a href="/">Demos</a>
					<a href="/">Features</a>
					<a href="/">Posts</a>
					<a href="/">Categories</a>
				</nav>
			</header>
			<main>
				<section>
					<h2>Popular Articles</h2>
				</section>
				<section>
					<h2>Editor&lsquo;s Choice</h2>
				</section>
				<section>
					<h2>Latest Posts</h2>
				</section>
			</main>
			<footer>This is a footer</footer>
		</div>
	);
}

export default App;
