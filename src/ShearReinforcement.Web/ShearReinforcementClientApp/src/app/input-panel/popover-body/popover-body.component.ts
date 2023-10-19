import { Bar } from './Bar';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-popover-body',
  templateUrl: './popover-body.component.html',
  styleUrls: ['./popover-body.component.css'],
})
export class PopoverBodyComponent implements OnInit {
  @Input()
  // eslint-disable-next-line @typescript-eslint/ban-types
  public hideCallback: Function;

  @Output()
  public valueUpdated: EventEmitter<number> = new EventEmitter<number>();

  public bar: Bar;

  ngOnInit() {
    this.bar = new Bar(20, 30);
  }

  hide() {
    this.hideCallback();
  }

  apply() {
    this.valueUpdated.emit(this.bar.area);
    this.hideCallback();
  }



}

