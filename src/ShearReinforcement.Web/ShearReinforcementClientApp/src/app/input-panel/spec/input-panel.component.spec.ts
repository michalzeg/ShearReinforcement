import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InputPanelComponent } from '../input-panel.component';
import { KatexModule } from 'ng-katex';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PopoverRowMockComponent } from './popover-row-mock.component';
import { NormalRowMockComponent } from './normal-row-mock.component';
import { of } from 'rxjs';
import { CalculationService } from '../../core/calulation-service/calculation.service';
import { InputData } from '../../core/data/input-data';

describe('InputPanelComponent', () => {
  let component: InputPanelComponent;
  let fixture: ComponentFixture<InputPanelComponent>;
  let calculationService: jasmine.SpyObj<CalculationService>;

  beforeEach(waitForAsync(() => {
    calculationService = jasmine.createSpyObj('CalculationService', ['calculate']);

    TestBed.configureTestingModule({
      declarations: [
        InputPanelComponent,
        PopoverRowMockComponent,
        NormalRowMockComponent
      ],
      imports: [
        KatexModule,
        PopoverModule.forRoot(),
        FormsModule,
        SharedModule],
      providers: [
        { provide: CalculationService, useValue: calculationService }
      ]
    })
      .compileComponents();
    const service: CalculationService = TestBed.get(CalculationService);
    service.inputData = of(new InputData());
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
