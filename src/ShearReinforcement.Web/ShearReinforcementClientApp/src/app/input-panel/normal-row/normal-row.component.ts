import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-normal-row',
  templateUrl: './normal-row.component.html',
  styleUrls: ['./normal-row.component.css']
})
export class NormalRowComponent {

  @Input()
  title: string;

  @Input()
  unit: string;

  @Input()
  value: number;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChanged(input: any): void {
    const value = +input.target.value;
    this.valueChange.emit(value);
  }

}
