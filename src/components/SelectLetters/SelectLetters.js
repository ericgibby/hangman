import PropTypes from 'prop-types';
import React from 'react';
import './SelectLetters.scss';

const ALPHABET = new Array(26).fill('').map((item, index) => String.fromCharCode(65 + index));

function getLettersFromWord(word = '') {
	return word.split('').reduce((obj, letter) => ({ ...obj, [letter]: true }), {});
}

function SelectLetters(props) {
	const letters = getLettersFromWord(props.word);
	const buttons = ALPHABET.map((letter, index) => {
		return (
			<button key={`LetterButton-${index}`} className="button">
				{letter}
			</button>
		);
	});
	return <div className="SelectLetters">{buttons}</div>;
}

SelectLetters.propTypes = {
	word: PropTypes.string
};

export default SelectLetters;
