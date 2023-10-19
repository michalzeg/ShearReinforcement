import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculationService } from '../core/calulation-service/calculation.service';
import { InputData } from '../core/data/input-data';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})
export class InputPanelComponent implements OnInit, OnDestroy {


  input: InputData;

  private inputSub: Subscription;

  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
    this.inputSub = this.calculationService.inputData.subscribe(e => this.input = e);
  }

  onChange(): void {
    this.calculationService.calculate(this.input);
  }

  ngOnDestroy(): void {
    this.inputSub?.unsubscribe();
  }

}


