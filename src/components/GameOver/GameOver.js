import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function GameOver({ hidden, success }) {
	const heading = success ? 'Congratulations!' : 'Game Over 🙁';
	const message = success ? 'You won!' : null;
	return hidden ? null : (
		<div className={classnames('GameOver', 'callout', { alert: !success, primary: !!success })}>
			<h2>{heading}</h2>
			<p>{message}</p>
		</div>
	);
}

GameOver.propTypes = {
	hidden: PropTypes.bool,
	success: PropTypes.bool
};

export default GameOver;
