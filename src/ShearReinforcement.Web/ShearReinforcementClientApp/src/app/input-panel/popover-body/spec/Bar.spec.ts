import { Bar } from '../Bar';

describe('Bar', () => {
    it('should return proper area for one bar', () => {
        const bar = new Bar(1, 20);

        const expectedArea = Math.round(Math.PI * 20 * 20 / 4 * 1);
        expect(bar.area).toEqual(expectedArea);

    });

    it('should return proper area for multiple bars', () => {
        const bar = new Bar(10, 20);

        const expectedArea = Math.round(Math.PI * 20 * 20 / 4 * 10);
        expect(bar.area).toEqual(expectedArea);

    });

    it('should return invalid for negative barCount', () => {
        const bar = new Bar(-10, 20);
        expect(bar.isValid()).toBeFalsy();
    });
    it('should return invalid for negative diamter', () => {
        const bar = new Bar(10, -20);
        expect(bar.isValid()).toBeFalsy();
    });
});
