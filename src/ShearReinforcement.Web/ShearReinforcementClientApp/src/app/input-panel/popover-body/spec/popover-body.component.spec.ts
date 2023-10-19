import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopoverBodyComponent } from '../popover-body.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Bar } from '../Bar';


describe('PopoverBodyComponent', () => {
  let component: PopoverBodyComponent;
  let fixture: ComponentFixture<PopoverBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverBodyComponent],
      imports: [FormsModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverBodyComponent);
    component = fixture.componentInstance;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    component.hideCallback = () => { };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call hideCallback when hide has been clicked', () => {
    let called = false;
    component.hideCallback = () => called = true;
    component.hide();
    fixture.detectChanges();

    expect(called).toBeTruthy();
  });

  it('should call hideCallback when Cancel button has been clicked', () => {
    let called = false;
    component.hideCallback = () => called = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const cancelButton = Array.from(element.querySelectorAll('button')).filter(e => e.innerText === 'Cancel')[0];
    cancelButton.click();
    expect(called).toBeTruthy();
  });

  it('should call hideCallback when apply has been clicked', () => {
    let called = false;
    component.hideCallback = () => called = true;
    component.apply();
    fixture.detectChanges();

    expect(called).toBeTruthy();
  });
  it('should call hideCallback when Apply button has been clicked', () => {
    let called = false;
    component.hideCallback = () => called = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const applyButton = Array.from(element.querySelectorAll('button')).filter(e => e.innerText === 'Apply')[0];
    applyButton.click();
    expect(called).toBeTruthy();
  });

  it('should call value updated event when Apply button has been clicked', () => {
    let called = false;
    component.valueUpdated.subscribe(() => {
      called = true;
    });

    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const applyButton = Array.from(element.querySelectorAll('button')).filter(e => e.innerText === 'Apply')[0];
    applyButton.click();

    expect(called).toBe(true);
  });



  it('should hide area when barsCount is negative', () => {

    component.bar = new Bar(-1, 2);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const areaContainer = element.querySelector('span.area');

    expect(areaContainer).toBeFalsy();
  });
  it('should hide area when diameter is negative', () => {

    component.bar = new Bar(1, -2);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const areaContainer = element.querySelector('span.area');

    expect(areaContainer).toBeFalsy();
  });

  it('should show area when barsCount is proper', () => {

    component.bar = new Bar(1, 2);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const areaContainer = element.querySelector('span.area');

    expect(areaContainer).toBeTruthy();
  });
  it('should hide area when diameter is negative', () => {

    component.bar = new Bar(1, 2);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const areaContainer = element.querySelector('span.area');

    expect(areaContainer).toBeTruthy();
  });
});
