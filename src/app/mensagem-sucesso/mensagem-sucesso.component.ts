import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-mensagem-sucesso',
    templateUrl: './mensagem-sucesso.component.html',
    styleUrls: ['./mensagem-sucesso.component.css'],
    standalone: false
})
export class MensagemSucessoComponent implements OnInit {

  @Output() public reiniciou:EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public reiniciaJogo():void{
    this.reiniciou.emit('reiniciou')
  }

}
