import { ForbiddenNumberValidatorDirective } from './number-validator.directive';
import { AbstractControl } from '@angular/forms';

describe('NumberValidatorDirective', () => {

  let directive: ForbiddenNumberValidatorDirective;

  const testCases = [
    { arg: 1, invalid: false },
    { arg: 0, invalid: true },
    { arg: -1, invalid: true },
    { arg: 10.1, invalid: false },
    { arg: 2, invalid: false },
    { arg: -2.2, invalid: true },
  ];

  beforeEach(() => {
    directive = new ForbiddenNumberValidatorDirective();
  });

  it('should create an instance', () => {

    expect(directive).toBeTruthy();
  });

  testCases.forEach(test => {
    it(`should return invalid value for ${test.arg} and return ${test.invalid}`, () => {
      const actualResult = directive.validate(<AbstractControl>{ value: test.arg });

      const isInvalid = actualResult != null;

      expect(isInvalid).toEqual(test.invalid);
    });
  });
});
