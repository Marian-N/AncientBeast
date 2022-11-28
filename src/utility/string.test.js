import { zfill, capitalize } from './string';

describe('string utility', () => {
	describe('zfill', () => {
		it('should return a string with leading zeros', () => {
			expect(zfill(1, 3)).toEqual('001');
			expect(zfill(1, 2)).toEqual('01');
		});
		it("shouldn't do any filling if size is smaller than the string", () => {
			expect(zfill(1, 1)).toEqual('1');
			expect(zfill(12, 1)).toEqual('12');
		});
	});

	describe('capitalize', () => {
		it('should capitalize the first letter of a string', () => {
			expect(capitalize('hello world')).toEqual('Hello world');
		});
		it("shouldn't break when capitalized string is passed in", () => {
			expect(capitalize('Hello world')).toEqual('Hello world');
		});
		it("shouldn't break when empty string is passed in", () => {
			expect(capitalize('')).toEqual('');
		});
	});
});
