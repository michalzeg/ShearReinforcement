import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculationService } from '../core/calulation-service/calculation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-output-panel',
  templateUrl: './output-panel.component.html',
  styleUrls: ['./output-panel.component.css']
})
export class OutputPanelComponent implements OnInit, OnDestroy {

  isValid: boolean;

  private readonly destroying$ = new Subject<boolean>();
  constructor(private calculations: CalculationService) { }

  ngOnInit() {
    this.calculations.getIsInputValid().pipe(takeUntil(this.destroying$)).subscribe(e => this.isValid = e);
  }

  ngOnDestroy(): void {
    this.destroying$?.next(true);
    this.destroying$?.complete();
  }

}
