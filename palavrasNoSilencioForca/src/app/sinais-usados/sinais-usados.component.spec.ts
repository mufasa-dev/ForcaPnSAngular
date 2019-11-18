import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinaisUsadosComponent } from './sinais-usados.component';

describe('SinaisUsadosComponent', () => {
  let component: SinaisUsadosComponent;
  let fixture: ComponentFixture<SinaisUsadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinaisUsadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinaisUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
