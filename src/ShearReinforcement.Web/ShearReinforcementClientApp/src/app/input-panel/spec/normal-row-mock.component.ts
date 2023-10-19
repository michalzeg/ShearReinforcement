import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-normal-row',
    template: 'app-normal-row',
})
export class NormalRowMockComponent {

    @Input()
    title: string;

    @Input()
    unit: string;

    @Input()
    value: number;

    @Output()
    valueChange: EventEmitter<number> = new EventEmitter<number>();

}
