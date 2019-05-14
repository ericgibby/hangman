import PropTypes from 'prop-types';
import React from 'react';
import './DisplayWord.scss';

export function getCharacters(word = '', usedLetters = {}) {
	const characters = word.split('').map(letter => {
		// Only mask letters between 65-90 (A-Z)
		const code = letter.charCodeAt();
		if (code >= 65 && code <= 90) {
			return usedLetters[letter] ? letter : '_';
		}
		return letter;
	});
	return characters.join('');
}

function DisplayWord({ usedLetters, word: wordProp }) {
	const word = getCharacters(wordProp, usedLetters);
	const words = word.split(' ');
	const parts = words
		.map((part, index) => {
			const letters = part.split('').map((letter, i) => (
				<span key={`Letter-${i}`} className="letter">
					{letter}
				</span>
			));
			return (
				<span key={`Word-${index}`} className="word">
					{letters}
				</span>
			);
		})
		.reduce((arr, part, index) => [...arr, part, <span key={`Space-${index}`}>&nbsp;</span>], [])
		.slice(0, -1);

	return word ? <div className="DisplayWord">{parts}</div> : null;
}

DisplayWord.propTypes = {
	usedLetters: PropTypes.object,
	word: PropTypes.string
};

export default DisplayWord;
