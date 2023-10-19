import { Component, Input } from '@angular/core';
import { EquationRow } from './equation-row';

@Component({
  selector: 'app-equation-row',
  templateUrl: './equation-row.component.html',
  styleUrls: ['./equation-row.component.css']
})
export class EquationRowComponent {

  @Input()
  equation: EquationRow;

}
