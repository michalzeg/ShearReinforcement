import { PopoverRowMockComponent } from './input-panel/spec/popover-row-mock.component';
import { NgModule } from '@angular/core';
import { InputPopoverMockComponent } from './input-panel/popover-row/spec/input-popover-mock.component';
import { NormalRowMockComponent } from './input-panel/spec/normal-row-mock.component';
import { TopPanelMockComponent } from './output-panel/spec/top-panel.component.mock';
import { BottomPanelMockComponent } from './output-panel/spec/bottom-panel.mock';

@NgModule({
    declarations: [
        PopoverRowMockComponent,
        InputPopoverMockComponent,
        NormalRowMockComponent,
        TopPanelMockComponent,
        BottomPanelMockComponent
    ],
    imports: [

    ],
    providers: [],
    bootstrap: []
})
export class AppTestModule { }
