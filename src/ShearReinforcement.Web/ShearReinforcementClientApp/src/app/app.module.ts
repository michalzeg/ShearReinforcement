import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KatexModule } from 'ng-katex';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { InputPanelModule } from './input-panel/input-panel.module';
import { OutputPanelModule } from './output-panel/output-panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot(),
    FormsModule,
    KatexModule,
    SharedModule,
    InputPanelModule,
    OutputPanelModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
