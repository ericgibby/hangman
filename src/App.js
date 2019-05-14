import React, { useState } from 'react';
import './App.scss';
import DisplayWord from './components/DisplayWord/DisplayWord';
import EnterWord from './components/EnterWord/EnterWord';
import Gallows from './components/Gallows/Gallows';
import SelectLetters from './components/SelectLetters/SelectLetters';
import GameOver from './components/GameOver/GameOver';

const NUM_TRIES = 6;

function App() {
	const [word, setWord] = useState('');
	const [usedLetters, setUsedLetters] = useState({});

	const wordLetters = word.split('').reduce((obj, letter) => {
		const code = letter.charCodeAt();
		if (code >= 65 && code <= 90) {
			return { ...obj, [letter]: true };
		}
		return obj;
	}, {});
	const incorrectCount = Object.keys(usedLetters).reduce((count, letter) => count + (!wordLetters[letter] ? 1 : 0), 0);
	const complete =
		!!word &&
		(incorrectCount === NUM_TRIES ||
			Object.keys(wordLetters).reduce((used, letter) => used && !!usedLetters[letter], true));

	const handleSubmit = newWord => setWord(newWord);
	const handleLetterClick = letter => setUsedLetters({ ...usedLetters, [letter]: true });

	return (
		<div className="App grid-container">
			<header>
				<h1>Hangman</h1>
			</header>
			<div>
				<div className="grid-x top-section">
					<div className="cell small-12 align-center">
						<GameOver success={complete && incorrectCount < NUM_TRIES} hidden={!complete} />
						<EnterWord onSubmit={handleSubmit} hidden={!!word} />
						<DisplayWord word={word} usedLetters={usedLetters} />
					</div>
				</div>
				<div className="grid-x">
					<div className="cell small-12 medium-8 text-center">
						<Gallows incorrectCount={incorrectCount} />
					</div>
					<div className="cell small-12 medium-4">
						<SelectLetters
							onLetterClick={handleLetterClick}
							usedLetters={usedLetters}
							wordLetters={wordLetters}
							hidden={!word}
							disabled={complete}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
