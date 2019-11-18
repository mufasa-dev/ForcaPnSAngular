import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErrouComponent } from './mensagem-errou.component';

describe('MensagemErrouComponent', () => {
  let component: MensagemErrouComponent;
  let fixture: ComponentFixture<MensagemErrouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemErrouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemErrouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
