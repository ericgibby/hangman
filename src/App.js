import React, { useState } from 'react';
import DisplayWord from './components/DisplayWord/DisplayWord';
import EnterWord from './components/EnterWord/EnterWord';

function App() {
	const [word, setWord] = useState('');
	const [usedLetters, setUsedLetters] = useState([]);

	const handleSubmit = newWord => setWord(newWord);

	return (
		<div className="App grid-container">
			<header>
				<h1>Hangman</h1>
			</header>
			<div>
				<EnterWord onSubmit={handleSubmit} hidden={!!word} />
				<DisplayWord word={word} usedLetters={usedLetters} />
			</div>
		</div>
	);
}

export default App;
