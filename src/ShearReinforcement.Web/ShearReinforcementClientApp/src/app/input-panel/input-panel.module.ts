import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPanelComponent } from './input-panel.component';
import { SharedModule } from '../shared/shared.module';
import { KatexModule } from 'ng-katex';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { InputPopoverComponent } from './input-popover/input-popover.component';
import { PopoverBodyComponent } from './popover-body/popover-body.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms';
import { PopoverRowComponent } from './popover-row/popover-row.component';
import { NormalRowComponent } from './normal-row/normal-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    KatexModule,
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  declarations: [
    InputPanelComponent,
    InputPopoverComponent,
    PopoverBodyComponent,
    PopoverRowComponent,
    NormalRowComponent,
  ],
  exports: [
    InputPanelComponent
  ]
})
export class InputPanelModule { }
