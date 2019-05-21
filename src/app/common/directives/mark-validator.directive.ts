import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMarkValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MarkValidatorDirective, multi: true }
  ]
})
export class MarkValidatorDirective {
  validate(n) {
    const inputValue = n.value;
    return inputValue > -1 && inputValue < 11
      ? null
      : { appMarkValidator: true };
  }
}
