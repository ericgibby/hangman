import PropTypes from 'prop-types';
import React from 'react';

export function getCharacters(word = '', letters = []) {
	const usedLetters = letters.reduce((obj, letter) => ({ ...obj, [letter]: true }), {});
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

function DisplayWord(props) {
	const word = getCharacters(props.word, props.usedLetters);

	return word ? <div className="DisplayWord">{word}</div> : null;
}

DisplayWord.propTypes = {
	usedLetters: PropTypes.arrayOf(PropTypes.string),
	word: PropTypes.string
};

export default DisplayWord;
