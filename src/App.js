import React from 'react';
import EnterWord from './components/EnterWord';

function App() {
	return (
		<div className="App grid-container">
			<header>
				<h1>Hangman</h1>
			</header>
			<div>
				<EnterWord />
			</div>
		</div>
	);
}

export default App;
