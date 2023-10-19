import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopPanelComponent } from './top-panel.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { of } from 'rxjs';
import { CalculationService } from '../../core/calulation-service/calculation.service';
import { TopPanelOutput } from '../../core/top-panel/top-panel-output';


describe('TopPanelComponent', () => {
  let component: TopPanelComponent;
  let fixture: ComponentFixture<TopPanelComponent>;
  let calculationService: jasmine.SpyObj<CalculationService>;

  beforeEach(waitForAsync(() => {
    calculationService = jasmine.createSpyObj('CalculationService', ['getRequiredShearReinforcement']);
    calculationService.getRequiredShearReinforcement.and.returnValue(of(false));


    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule
      ],
      providers: [
        { provide: CalculationService, useValue: calculationService }
      ],
      declarations: [TopPanelComponent]
    })
      .compileComponents();

    const service: CalculationService = TestBed.get(CalculationService);
    service.topPanelOutput = of(<TopPanelOutput>{});

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
