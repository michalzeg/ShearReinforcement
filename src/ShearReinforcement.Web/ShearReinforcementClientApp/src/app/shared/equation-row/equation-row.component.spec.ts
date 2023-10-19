import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EquationRowComponent } from './equation-row.component';
import { CommonModule } from '@angular/common';
import { KatexModule } from 'ng-katex';

describe('EquationRowComponent', () => {
  let component: EquationRowComponent;
  let fixture: ComponentFixture<EquationRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        KatexModule
      ],
      declarations: [EquationRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
