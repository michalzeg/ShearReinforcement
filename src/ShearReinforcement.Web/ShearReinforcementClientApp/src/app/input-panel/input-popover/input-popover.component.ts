import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-popover',
  templateUrl: './input-popover.component.html',
  styleUrls: ['./input-popover.component.css']
})


export class InputPopoverComponent {

  @Input()
  value: number;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChange(input: any): void {
    const value = +input.target.value;
    this.valueChange.emit(value);
  }

  onValueUpdated(value: number): void {
    this.value = value;
    this.valueChange.emit(value);
  }

}


