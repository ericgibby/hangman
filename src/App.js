import React, { useState } from 'react';
import DisplayWord from './components/DisplayWord/DisplayWord';
import EnterWord from './components/EnterWord/EnterWord';
import Gallows from './components/Gallows/Gallows';
import SelectLetters from './components/SelectLetters/SelectLetters';

function App() {
	const [word, setWord] = useState('');
	const [usedLetters, setUsedLetters] = useState({});

	const wordLetters = word.split('').reduce((obj, letter) => ({ ...obj, [letter]: true }), {});
	const incorrectCount = Object.keys(usedLetters).reduce((count, letter) => count + (!wordLetters[letter] ? 1 : 0), 0);
	const complete =
		incorrectCount === 6 || Object.keys(wordLetters).reduce((used, letter) => used && !!usedLetters[letter], true);

	const handleSubmit = newWord => setWord(newWord);
	const handleLetterClick = letter => setUsedLetters({ ...usedLetters, [letter]: true });

	return (
		<div className="App grid-container">
			<header>
				<h1>Hangman</h1>
			</header>
			<div>
				<EnterWord onSubmit={handleSubmit} hidden={!!word} />
				<DisplayWord word={word} usedLetters={usedLetters} />
				<SelectLetters
					onLetterClick={handleLetterClick}
					usedLetters={usedLetters}
					wordLetters={wordLetters}
					hidden={!word}
					disabled={complete}
				/>
				<Gallows incorrectCount={incorrectCount} />
			</div>
		</div>
	);
}

export default App;
