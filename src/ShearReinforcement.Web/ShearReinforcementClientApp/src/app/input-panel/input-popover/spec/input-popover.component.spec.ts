import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputPopoverComponent } from '../input-popover.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopoverBodyComponent } from '../../popover-body/popover-body.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

describe('InputPopoverComponent', () => {
  let component: InputPopoverComponent;
  let fixture: ComponentFixture<InputPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputPopoverComponent, PopoverBodyComponent],
      imports: [
        PopoverModule.forRoot(),
        FormsModule,
        SharedModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
