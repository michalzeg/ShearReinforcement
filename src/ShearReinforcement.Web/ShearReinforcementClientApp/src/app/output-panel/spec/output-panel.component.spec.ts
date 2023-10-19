import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutputPanelComponent } from '../output-panel.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';
import { of } from 'rxjs';
import { TopPanelMockComponent } from './top-panel.component.mock';
import { BottomPanelMockComponent } from './bottom-panel.mock';
import { CalculationService } from '../../core/calulation-service/calculation.service';

describe('OutputPanelComponent', () => {
  let component: OutputPanelComponent;
  let fixture: ComponentFixture<OutputPanelComponent>;
  let calculationService: jasmine.SpyObj<CalculationService>;

  beforeEach(waitForAsync(() => {
    calculationService = jasmine.createSpyObj('CalculationService', ['calculate', 'getIsInputValid']);
    calculationService.getIsInputValid.and.returnValue(of(false));

    TestBed.configureTestingModule({
      declarations: [
        OutputPanelComponent,
        TopPanelMockComponent,
        BottomPanelMockComponent
      ],
      imports: [
        KatexModule,
        FormsModule,
        SharedModule],
      providers: [
        { provide: CalculationService, useValue: calculationService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(OutputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
