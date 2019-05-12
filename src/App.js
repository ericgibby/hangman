import React from 'react';
import EnterWord from './components/EnterWord/EnterWord';
import DisplayWord from './components/DisplayWord/DisplayWord';

function App() {
	return (
		<div className="App grid-container">
			<header>
				<h1>Hangman</h1>
			</header>
			<div>
				<EnterWord />
				<DisplayWord />
			</div>
		</div>
	);
}

export default App;
