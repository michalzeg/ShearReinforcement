import {  Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-input-popover',
    template: 'app-input-popover'
})

export class InputPopoverMockComponent {

    @Input()
    value: number;

    @Output()
    valueChange: EventEmitter<number> = new EventEmitter<number>();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange() { }


}
