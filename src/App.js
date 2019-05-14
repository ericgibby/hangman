import React, { useState } from 'react';
import DisplayWord from './components/DisplayWord/DisplayWord';
import EnterWord from './components/EnterWord/EnterWord';
import SelectLetters from './components/SelectLetters/SelectLetters';

function App() {
	const [word, setWord] = useState('');
	const [usedLetters, setUsedLetters] = useState([]);

	const handleSubmit = newWord => setWord(newWord);
	const handleLetterClick = letter => setUsedLetters([...usedLetters, letter]);

	return (
		<div className="App grid-container">
			<header>
				<h1>Hangman</h1>
			</header>
			<div>
				<EnterWord onSubmit={handleSubmit} hidden={!!word} />
				<DisplayWord word={word} usedLetters={usedLetters} />
				<SelectLetters onLetterClick={handleLetterClick} usedLetters={usedLetters} word={word} hidden={!word} />
			</div>
		</div>
	);
}

export default App;
