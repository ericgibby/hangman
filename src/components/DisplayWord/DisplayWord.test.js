import { getCharacters } from './DisplayWord';

describe('DisplayWord component', () => {
	describe('getCharacters(...)', () => {
		it('inserts underscores for letters', () => {
			const characters = getCharacters('HELLO', []);
			expect(characters).toBe('_____');
		});

		it('does not insert underscores for non-letters', () => {
			const characters = getCharacters('HELLO WORLD!', []);
			expect(characters).toBe('_____ _____!');
		});

		it('shows letters that exist in the specified array', () => {
			const characters = getCharacters('HELLO WORLD!', ['L', 'O']);
			expect(characters).toBe('__LLO _O_L_!');
		});
	});
});
