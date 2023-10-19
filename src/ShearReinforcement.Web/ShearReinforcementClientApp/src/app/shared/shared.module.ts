import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquationRowComponent } from './equation-row/equation-row.component';
import { KatexModule } from 'ng-katex';
import { NumberFormaterPipe } from './number-formatter/number-formater.pipe';
import { ForbiddenNumberValidatorDirective } from './number-validator/number-validator.directive';



@NgModule({
  imports: [
    CommonModule,
    KatexModule
  ],
  declarations: [
    NumberFormaterPipe,
    ForbiddenNumberValidatorDirective,
    EquationRowComponent],
  exports: [
    NumberFormaterPipe,
    ForbiddenNumberValidatorDirective,
    EquationRowComponent
  ]
})
export class SharedModule { }
