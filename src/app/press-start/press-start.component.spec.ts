import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressStartComponent } from './press-start.component';

describe('PressStartComponent', () => {
  let component: PressStartComponent;
  let fixture: ComponentFixture<PressStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
