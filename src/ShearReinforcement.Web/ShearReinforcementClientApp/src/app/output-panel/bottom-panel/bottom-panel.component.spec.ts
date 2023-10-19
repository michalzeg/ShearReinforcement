import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomPanelComponent } from './bottom-panel.component';
import { CalculationService } from '../../core/calulation-service/calculation.service';
import { TopPanelOutput } from '../../core/top-panel/top-panel-output';
import { of } from 'rxjs';
import { BottomPanelOutput } from '../../core/bottom-panel/bottom-panel-output';
import { KatexModule } from 'ng-katex';
import { SharedModule } from '../../shared/shared.module';

describe('BottomPanelComponent', () => {
  let component: BottomPanelComponent;
  let fixture: ComponentFixture<BottomPanelComponent>;
  let calculationService: jasmine.SpyObj<CalculationService>;


  beforeEach(waitForAsync(() => {
    calculationService = jasmine.createSpyObj('CalculationService',
      ['getRequiredShearReinforcement', 'getNoSolution', 'getShearReinforcementOK', 'getShearReinforcementLow']);
    calculationService.getRequiredShearReinforcement.and.returnValue(of(false));
    calculationService.getNoSolution.and.returnValue(of(false));
    calculationService.getShearReinforcementOK.and.returnValue(of(false));
    calculationService.getShearReinforcementLow.and.returnValue(of(false));

    TestBed.configureTestingModule({
      imports: [KatexModule, SharedModule],
      providers: [
        { provide: CalculationService, useValue: calculationService }
      ],
      declarations: [BottomPanelComponent],
    })
      .compileComponents();

    const service: CalculationService = TestBed.get(CalculationService);
    service.topPanelOutput = of(<TopPanelOutput>{});
    service.bottomPanelOutput = of(<BottomPanelOutput>{});

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
