import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculationService } from '../../core/calulation-service/calculation.service';
import { TopPanelOutput } from '../../core/top-panel/top-panel-output';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit, OnDestroy {

  public panelOutput: TopPanelOutput;
  public requiresShearReinforcement: boolean;

  private readonly destroying$ = new Subject<boolean>();
  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
    this.calculationService.topPanelOutput.pipe(takeUntil(this.destroying$)).subscribe(e => this.panelOutput = e);
    this.calculationService.getRequiredShearReinforcement().pipe(takeUntil(this.destroying$)).subscribe(e => this.requiresShearReinforcement = e);
  }

  ngOnDestroy(): void {
    this.destroying$?.next(true);
    this.destroying$?.complete();
  }

}
