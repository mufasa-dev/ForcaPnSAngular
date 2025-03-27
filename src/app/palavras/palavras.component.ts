import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Palavra } from '../shared/palavras.model'
import { PALAVRAS } from './palavras-mock'

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.css']
})

export class PalavrasComponent implements OnInit {

  //Variaveis letras
  @Input('letras') public letras = {
    'letra1' : '_',
    'letra2' : '_',
    'letra3' : '_',
    'letra4' : '_',
    'letra5' : '_',
    'letra6' : '_',
    'letra7' : '_',
    'letra8' : '_',
    'letra9' : '_',
    'letra10' : '_'
  }
  //Variaveis letras descobertas
  @Input('letrasDes') public letrasDes = {
    'letra1' : false,
    'letra2' : false,
    'letra3' : false,
    'letra4' : false,
    'letra5' : false,
    'letra6' : false,
    'letra7' : false,
    'letra8' : false,
    'letra9' : false,
    'letra10' : false
  }

  public Palavras: Palavra[] = PALAVRAS;

  @Input() public palavraDaVez:Palavra = {palavra:'',dica:''}

  constructor() {   }

  ngOnInit() {
  }

}
