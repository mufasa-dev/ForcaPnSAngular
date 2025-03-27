import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMusicComponent } from './botao-music.component';

describe('BotaoMusicComponent', () => {
  let component: BotaoMusicComponent;
  let fixture: ComponentFixture<BotaoMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
