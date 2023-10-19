import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-popover-row',
  templateUrl: './popover-row.component.html',
  styleUrls: ['./popover-row.component.css']
})
export class PopoverRowComponent {

  @Input()
  title: string;

  @Input()
  unit: string;

  @Input()
  value: number;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  onChange(value: number): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
