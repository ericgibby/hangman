import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './SelectLetters.scss';

const ALPHABET = new Array(26).fill('').map((item, index) => String.fromCharCode(65 + index));

function getLettersMap(letters = []) {
	return letters.reduce((obj, letter) => ({ ...obj, [letter]: true }), {});
}

function SelectLetters(props) {
	const handleClick = e => {
		const character = e.target.value;
		const { onLetterClick } = props;
		onLetterClick && onLetterClick(character);
	};

	const letters = getLettersMap((props.word || '').split(''));
	const selectedLetters = getLettersMap(props.usedLetters);

	const buttons = ALPHABET.map((letter, index) => {
		return (
			<button
				key={`LetterButton-${index}`}
				className={classnames('button', {
					selected: !!selectedLetters[letter],
					alert: !!selectedLetters[letter] && !letters[letter]
				})}
				value={letter}
				onClick={handleClick}
				disabled={!!selectedLetters[letter]}>
				{letter}
			</button>
		);
	});

	return props.hidden ? null : <div className="SelectLetters">{buttons}</div>;
}

SelectLetters.propTypes = {
	hidden: PropTypes.bool,
	onLetterClick: PropTypes.func,
	usedLetters: PropTypes.arrayOf(PropTypes.string),
	word: PropTypes.string
};

export default SelectLetters;
