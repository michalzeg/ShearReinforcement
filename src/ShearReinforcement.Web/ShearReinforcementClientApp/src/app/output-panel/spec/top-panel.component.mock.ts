import { Component } from '@angular/core';
import { TopPanelOutput } from '../../core/top-panel/top-panel-output';

@Component({
    selector: 'app-top-panel',
    template: './top-panel.component.html',

})
export class TopPanelMockComponent {
    public requiresShearReinforcement: boolean;
    public panelOutput: TopPanelOutput;
}
