import { Component, Input, EventEmitter } from '@angular/core';

import { Palavra } from './shared/palavras.model'
import { PALAVRAS } from './palavras/palavras-mock'
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { BotaoMusicComponent } from './botao-music/botao-music.component';
import { SinaisUsadosComponent } from './sinais-usados/sinais-usados.component';
import { LetrasComponent } from './letras/letras.component';
import { MensagemErrouComponent } from './mensagem-errou/mensagem-errou.component';
import { MensagemSucessoComponent } from './mensagem-sucesso/mensagem-sucesso.component';
import { PalavrasComponent } from './palavras/palavras.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { PressStartComponent } from './press-start/press-start.component';
import { FundoComponent } from './fundo/fundo.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      FundoComponent,
      PressStartComponent,
      TentativasComponent,
      PalavrasComponent,
      MensagemSucessoComponent,
      MensagemErrouComponent,
      LetrasComponent,
      SinaisUsadosComponent,
      BotaoVoltarComponent
    ]
})
export class AppComponent {
  title = 'app';
  iniciou: boolean = false;

  public tentativas: number = 0;

  //Variaveis letras
  public letras = {
    'letra1': '_',
    'letra2': '_',
    'letra3': '_',
    'letra4': '_',
    'letra5': '_',
    'letra6': '_',
    'letra7': '_',
    'letra8': '_',
    'letra9': '_',
    'letra10': '_'
  }
  //Variaveis letras descobertas
  public letrasDes = {
    'letra1': false,
    'letra2': false,
    'letra3': false,
    'letra4': false,
    'letra5': false,
    'letra6': false,
    'letra7': false,
    'letra8': false,
    'letra9': false,
    'letra10': false
  }

  //Letras usadas
  public letrasUsadas: boolean[] = [
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false,
  ]

  public Palavras: Palavra[] = PALAVRAS;

  public palavraDaVez: Palavra = { palavra: '', dica: '' }

  public letraEscolhida: EventEmitter<string> = new EventEmitter();

  public mensagemSuccess = false;
  public mensagemLose = false;
  public sinaisUsados = false;

  public abrirSinais():void{
    this.sinaisUsados = true;
  }
  public fecharSinais():void{
    this.sinaisUsados = false;
  }

  public iniciaJogo(tipo: string) {
    this.iniciou = true;
    this.aleatWork();
  }

  public voltaInicio(tipo:string){
    this.reiniciarLetras();
    this.reiniciarLetrasDes();
    this.iniciou = false;
    this.tentativas = 0;
  }

  public reiniciaJogo(tipo: string) {
    this.iniciou = true;
    this.tentativas = 0;
    this.mensagemSuccess = false;
    this.mensagemLose = false;
    this.reiniciarLetras();
    this.reiniciarLetrasDes();
    this.aleatWork();
  }

  public escolheuLetra(letra: string) {
    this.validar(letra);
  }

  public reiniciarLetras(): void {
    this.letrasUsadas = [
      false, false, false, false, false, false, false,
      false, false, false, false, false, false, false,
      false, false, false, false, false, false, false,
      false, false, false, false, false,
    ]
  }

  public reiniciarLetrasDes(): void {
    this.letrasDes = {
      'letra1': false,
      'letra2': false,
      'letra3': false,
      'letra4': false,
      'letra5': false,
      'letra6': false,
      'letra7': false,
      'letra8': false,
      'letra9': false,
      'letra10': false
    }
  }

  public validar(letra: string) {
    let acertou: boolean = false;
    //Acertou letra1
    if (this.letras.letra1 == letra) {
      this.letrasDes.letra1 = true;
      acertou = true;
    }
    //Acertou letra2
    if (this.letras.letra2 == letra) {
      this.letrasDes.letra2 = true;
      acertou = true;
    }
    //Acertou letra3
    if (this.letras.letra3 == letra) {
      this.letrasDes.letra3 = true;
      acertou = true;
    }
    //Acertou letra4
    if (this.letras.letra4 == letra) {
      this.letrasDes.letra4 = true;
      acertou = true;
    }
    //Acertou letra5
    if (this.letras.letra5 == letra) {
      this.letrasDes.letra5 = true;
      acertou = true;
    }//Acertou letra6
    if (this.letras.letra6 == letra) {
      this.letrasDes.letra6 = true;
      acertou = true;
    }
    //Acertou letra7
    if (this.letras.letra7 == letra) {
      this.letrasDes.letra7 = true;
      acertou = true;
    }
    //Acertou letra8
    if (this.letras.letra8 == letra) {
      this.letrasDes.letra8 = true;
      acertou = true;
    }
    //Acertou letra9
    if (this.letras.letra9 == letra) {
      this.letrasDes.letra9 = true;
      acertou = true;
    }
    //Acertou letra10
    if (this.letras.letra10 == letra) {
      this.letrasDes.letra10 = true;
      acertou = true;
    }

    //Se errar
    if (acertou == false) {
      this.tentativas++;
    }

    //Se acertou tudo
    if (this.letrasDes.letra1 == true && this.letrasDes.letra2 == true &&
      this.letrasDes.letra3 == true && this.letrasDes.letra4 == true &&
      this.letrasDes.letra5 == true && this.letrasDes.letra6 == true &&
      this.letrasDes.letra7 == true && this.letrasDes.letra8 == true &&
      this.letrasDes.letra9 == true && this.letrasDes.letra10 == true) {
      this.mensagemSuccess = true
    }

    //Se errar tudo
    if(this.tentativas >= 6){
      this.mensagemLose = true;
    }
  }

  public aleatWork() {
    let numero: number = Math.floor(Math.random() * this.Palavras.length + 1);
    this.palavraDaVez = this.Palavras[numero];

    //Validando letras
    if (this.palavraDaVez.palavra.length >= 1) {
      this.letras.letra1 = this.palavraDaVez.palavra[0];
    } else {
      this.letras.letra1 = "";
      this.letrasDes.letra1 = true;
    }
    //Letra 2
    if (this.palavraDaVez.palavra.length >= 2) {
      this.letras.letra2 = this.palavraDaVez.palavra[1];
    } else {
      this.letras.letra2 = "";
      this.letrasDes.letra2 = true;
    }
    //Letra 3
    if (this.palavraDaVez.palavra.length >= 3) {
      this.letras.letra3 = this.palavraDaVez.palavra[2];
    } else {
      this.letras.letra3 = "";
      this.letrasDes.letra3 = true;
    }
    //Letra 4
    if (this.palavraDaVez.palavra.length >= 4) {
      this.letras.letra4 = this.palavraDaVez.palavra[3];
    } else {
      this.letras.letra4 = "";
      this.letrasDes.letra4 = true;
    }
    //Letra 5
    if (this.palavraDaVez.palavra.length >= 5) {
      this.letras.letra5 = this.palavraDaVez.palavra[4];
    } else {
      this.letras.letra5 = "";
      this.letrasDes.letra5 = true;
    }
    //Letra 6
    if (this.palavraDaVez.palavra.length >= 6) {
      this.letras.letra6 = this.palavraDaVez.palavra[5];
    } else {
      this.letras.letra6 = "";
      this.letrasDes.letra6 = true;
    }
    //Letra 7
    if (this.palavraDaVez.palavra.length >= 7) {
      this.letras.letra7 = this.palavraDaVez.palavra[6];
    } else {
      this.letras.letra7 = "";
      this.letrasDes.letra7 = true;
    }
    //Letra 8
    if (this.palavraDaVez.palavra.length >= 8) {
      this.letras.letra8 = this.palavraDaVez.palavra[7];
    } else {
      this.letras.letra8 = "";
      this.letrasDes.letra8 = true;
    }
    //Letra 9
    if (this.palavraDaVez.palavra.length >= 9) {
      this.letras.letra9 = this.palavraDaVez.palavra[8];
    } else {
      this.letras.letra9 = "";
      this.letrasDes.letra9 = true;
    }
    //Letra 10
    if (this.palavraDaVez.palavra.length >= 10) {
      this.letras.letra10 = this.palavraDaVez.palavra[9];
    } else {
      this.letras.letra10 = "";
      this.letrasDes.letra10 = true;
    }
  }

}
