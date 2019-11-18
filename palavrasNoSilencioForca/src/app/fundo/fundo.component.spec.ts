import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoComponent } from './fundo.component';

describe('FundoComponent', () => {
  let component: FundoComponent;
  let fixture: ComponentFixture<FundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
