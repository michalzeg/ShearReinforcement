import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopoverRowComponent } from '../popover-row.component';
import { InputPopoverMockComponent } from './input-popover-mock.component';
import { KatexModule } from 'ng-katex';

describe('PopoverRowComponent', () => {
  let component: PopoverRowComponent;
  let fixture: ComponentFixture<PopoverRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PopoverRowComponent,
        InputPopoverMockComponent
      ],
      imports: [
        KatexModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
