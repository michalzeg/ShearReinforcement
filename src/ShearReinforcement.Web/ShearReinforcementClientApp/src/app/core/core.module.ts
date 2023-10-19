import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './Http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CalculationService } from './calulation-service/calculation.service';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    HttpService,
    CalculationService,
  ]
})
export class CoreModule { }
