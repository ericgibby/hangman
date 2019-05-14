import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './EnterWord.scss';

function EnterWord({ hidden, onSubmit }) {
	const [word, wordChanged] = useState('');

	const handleChange = e => {
		const text = e.target.value.toUpperCase();
		wordChanged(text);
	};

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit && onSubmit(word);
		wordChanged('');
	};

	return hidden ? null : (
		<div className="EnterWord">
			<p>Enter a word or phrase to guess.</p>
			<form onSubmit={handleSubmit}>
				<div className="grid-x">
					<div className="cell medium-10 small-12">
						<label>
							<span className="show-for-sr">Enter a word</span>
							<input type="password" placeholder="Enter a word" value={word} onChange={handleChange} />
						</label>
					</div>
					<div className="cell medium-2 small-12">
						<button type="submit" className="button primary">
							OK
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

EnterWord.propTypes = {
	hidden: PropTypes.bool,
	onSubmit: PropTypes.func
};

export default EnterWord;
