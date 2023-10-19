import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

import { Observable, zip, BehaviorSubject, of } from 'rxjs';
import { OutputData } from '../data/output-data';
import {
  switchMap, share, concatMap
} from 'rxjs/operators';
import { InputData, DefaultInputData } from '../data/input-data';
import { TopPanelOutput } from '../top-panel/top-panel-output';
import { topPanelOutputConverter } from '../top-panel/top-panel-output.converters';
import { Results } from '../data/results';
import { BottomPanelOutput } from '../bottom-panel/bottom-panel-output';
import { bottomPanelOutputConverter } from '../bottom-panel/bottom-panel-output.converters';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private inputDataSubject = new BehaviorSubject<InputData>(DefaultInputData);

  public outputData: Observable<OutputData>;
  public inputData = this.inputDataSubject.asObservable();
  public topPanelOutput: Observable<TopPanelOutput>;
  public bottomPanelOutput: Observable<BottomPanelOutput>;
  public results: Observable<Results>;

  constructor(private httpService: HttpService) {
    this.outputData = this.inputData.pipe(
      switchMap((input: InputData) => this.httpService.getResults(input)),
      share(),
    );

    this.results = zip(
      this.inputData,
      this.outputData,
      (input: InputData, output: OutputData) => Results.create(input, output)
    );

    this.topPanelOutput = this.results.pipe(
      concatMap(results => of(topPanelOutputConverter(results))
      )
    );

    this.bottomPanelOutput = this.results.pipe(
      concatMap(results => of(bottomPanelOutputConverter(results))
      )
    );

  }

  calculate(input: InputData): void {
    this.inputDataSubject.next(input);
  }

  getIsInputValid(): Observable<boolean> {
    const result = this.inputData.pipe(
      concatMap(r => of(r.isValid))
    );
    return result;
  }

  getRequiredShearReinforcement(): Observable<boolean> {
    const result = this.results.pipe(
      concatMap(r => of(r.ved >= r.vrdc))
    );
    return result;
  }

  getNoSolution(): Observable<boolean> {
    const result = this.results.pipe(
      concatMap(r => of(r.noSolution))
    );
    return result;
  }

  getShearReinforcementOK(): Observable<boolean> {
    const result = this.results.pipe(
      concatMap(r => of(r.ved <= r.vrds && !r.noSolution))
    );
    return result;
  }

  getShearReinforcementLow(): Observable<boolean> {
    const result = this.results.pipe(
      concatMap(r => of(r.ved > r.vrds && !r.noSolution))
    );
    return result;
  }

}
