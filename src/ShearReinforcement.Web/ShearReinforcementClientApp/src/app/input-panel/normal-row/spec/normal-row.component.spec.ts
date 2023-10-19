import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NormalRowComponent } from '../normal-row.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';

describe('NormalRowComponent', () => {
  let component: NormalRowComponent;
  let fixture: ComponentFixture<NormalRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NormalRowComponent],
      imports: [
        FormsModule,
        SharedModule,
        KatexModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
