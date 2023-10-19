import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { isValidNumber } from './is-valid-number';

@Directive({
  selector: '[appForbiddenNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNumberValidatorDirective, multi: true }]
})
export class ForbiddenNumberValidatorDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: unknown } | null {
    const invalid = !isValidNumber(control.value);
    return invalid ? { 'forbiddenNumber': { value: control.value } } : null;
  }

}
