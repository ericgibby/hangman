import PropTypes from 'prop-types';
import React from 'react';

function Gallows({ usedLetters, word }) {
	const correctLetters = (word || '').split('').reduce((obj, letter) => ({ ...obj, [letter]: true }), {});
	const incorrectCount = (usedLetters || []).reduce((count, letter) => count + (!correctLetters[letter] ? 1 : 0), 0);
	const stage = Math.min(incorrectCount, 6);
	return (
		<div className="Gallows">
			<img src={`${process.env.PUBLIC_URL}/hangman-${stage}.svg`} alt="Hangman Gallows" />
		</div>
	);
}

Gallows.propTypes = {
	usedLetters: PropTypes.arrayOf(PropTypes.string),
	word: PropTypes.string
};

export default Gallows;
