import { NumberFormaterPipe } from './number-formater.pipe';

describe('NumberFormaterPipe', () => {

  const testCases = [
    { arg: 100, expected: '100' },
    { arg: 1000, expected: '1 000' },
    { arg: 0.01001212, expected: '0.01' },
    { arg: 10125.21001212, expected: '10 125.21' },
  ];

  let pipe: NumberFormaterPipe;
  beforeEach(() => {
    pipe = new NumberFormaterPipe();
  });

  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  testCases.forEach(test => {
    it(`should return proper value for ${test.arg} and return ${test.expected}`, () => {
      const actualResult = pipe.transform(test.arg);
      expect(actualResult).toEqual(test.expected);
    });
  });
});
