import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FundoComponent } from './fundo/fundo.component';
import { PressStartComponent } from './press-start/press-start.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { PalavrasComponent } from './palavras/palavras.component';
import { MensagemSucessoComponent } from './mensagem-sucesso/mensagem-sucesso.component';
import { MensagemErrouComponent } from './mensagem-errou/mensagem-errou.component';
import { LetrasComponent } from './letras/letras.component';
import { SinaisUsadosComponent } from './sinais-usados/sinais-usados.component';
import { BotaoMusicComponent } from './botao-music/botao-music.component';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';

@NgModule({
  declarations: [
    AppComponent,
    FundoComponent,
    PressStartComponent,
    TentativasComponent,
    PalavrasComponent,
    MensagemSucessoComponent,
    MensagemErrouComponent,
    LetrasComponent,
    SinaisUsadosComponent,
    BotaoMusicComponent,
    BotaoVoltarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
