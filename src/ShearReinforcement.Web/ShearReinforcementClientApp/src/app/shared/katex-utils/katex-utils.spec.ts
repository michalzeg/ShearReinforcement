import { changeToEquation } from './change-to-equation';


describe('KatexUtils', () => {

    it(`transformUnit changes '/' to ' \\over '`, () => {
        const value = `N/m`;
        const actual = changeToEquation(value);
        const expected = `N \\over m`;
        expect(actual).toEqual(expected);
    });

    it(`transformUnit remains the same value`, () => {
        const value = `N * m`;
        const actual = changeToEquation(value);
        const expected = `N * m`;
        expect(actual).toEqual(expected);
    });
});
