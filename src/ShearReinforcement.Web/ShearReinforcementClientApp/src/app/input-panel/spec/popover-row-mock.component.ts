import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-popover-row',
    template: 'app-popover-row',
})
export class PopoverRowMockComponent {

    @Input()
    title: string;

    @Input()
    unit: string;

    @Input()
    value: number;

    @Output()
    valueChange: EventEmitter<number> = new EventEmitter<number>();

}
