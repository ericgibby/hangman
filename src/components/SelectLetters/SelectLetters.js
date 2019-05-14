import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './SelectLetters.scss';

const ALPHABET = new Array(26).fill('').map((item, index) => String.fromCharCode(65 + index));

function SelectLetters({ disabled, hidden, onLetterClick, usedLetters, wordLetters }) {
	const handleClick = e => {
		const character = e.target.value;
		onLetterClick && onLetterClick(character);
	};

	const buttons = ALPHABET.map((letter, index) => {
		return (
			<button
				key={`LetterButton-${index}`}
				className={classnames('button', {
					selected: !!usedLetters[letter],
					alert: !!usedLetters[letter] && !wordLetters[letter]
				})}
				value={letter}
				onClick={handleClick}
				disabled={disabled || !!usedLetters[letter]}>
				{letter}
			</button>
		);
	});

	return hidden ? null : <div className="SelectLetters">{buttons}</div>;
}

SelectLetters.propTypes = {
	disabled: PropTypes.bool,
	hidden: PropTypes.bool,
	onLetterClick: PropTypes.func,
	usedLetters: PropTypes.object,
	wordLetters: PropTypes.object
};

export default SelectLetters;
