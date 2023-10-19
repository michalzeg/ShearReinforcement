import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculationService } from '../../core/calulation-service/calculation.service';
import { BottomPanelOutput } from '../../core/bottom-panel/bottom-panel-output';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit, OnDestroy {

  panelOutput: BottomPanelOutput;

  noSolution: boolean;
  shearReinforcementOK: boolean;
  shearReinforcementLow: boolean;

  private readonly destroying$ = new Subject<boolean>();

  constructor(private calculationService: CalculationService) { }


  ngOnInit() {
    this.calculationService.bottomPanelOutput.pipe(takeUntil(this.destroying$)).subscribe(e => this.panelOutput = e);
    this.calculationService.getNoSolution().pipe(takeUntil(this.destroying$)).subscribe(e => this.noSolution = e);
    this.calculationService.getShearReinforcementOK().pipe(takeUntil(this.destroying$)).subscribe(e => this.shearReinforcementOK = e);
    this.calculationService.getShearReinforcementLow().pipe(takeUntil(this.destroying$)).subscribe(e => this.shearReinforcementLow = e);
  }

  ngOnDestroy(): void {
    this.destroying$?.next(true);
    this.destroying$?.complete();
  }

}
