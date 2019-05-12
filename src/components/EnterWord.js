import React, { useState } from 'react';

function EnterWord(props) {
	const [word, wordChanged] = useState('');

	const handleChange = e => {
		const text = e.target.value.toUpperCase();
		wordChanged(text);
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className="EnterWord">
			<form onSubmit={handleSubmit}>
				<label>
					Enter a word to guess:
					<input type="password" placeholder="Enter a word" value={word} onChange={handleChange} />
				</label>
			</form>
		</div>
	);
}

export default EnterWord;
