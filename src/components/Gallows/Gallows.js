import PropTypes from 'prop-types';
import React from 'react';

function Gallows({ incorrectCount }) {
	const stage = Math.min(incorrectCount, 6);
	return (
		<div className="Gallows">
			<img src={`${process.env.PUBLIC_URL}/hangman-${stage}.svg`} alt="Hangman Gallows" />
		</div>
	);
}

Gallows.propTypes = {
	incorrectCount: PropTypes.number
};

export default Gallows;
