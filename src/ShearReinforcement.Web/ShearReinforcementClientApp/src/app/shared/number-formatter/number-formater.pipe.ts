import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from './format-number';


@Pipe({
  name: 'numberFormater'
})
export class NumberFormaterPipe implements PipeTransform {

  transform(inputNumber: number): string {
    return formatNumber(inputNumber);
  }

}
