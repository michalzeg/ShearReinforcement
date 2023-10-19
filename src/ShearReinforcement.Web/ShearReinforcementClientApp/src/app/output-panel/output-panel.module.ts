import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputPanelComponent } from './output-panel.component';
import { SharedModule } from '../shared/shared.module';
import { KatexModule } from 'ng-katex';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    KatexModule
  ],
  declarations: [OutputPanelComponent, TopPanelComponent, BottomPanelComponent],
  exports: [
    OutputPanelComponent
  ]

})
export class OutputPanelModule { }
