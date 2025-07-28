import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-botao-voltar',
    templateUrl: './botao-voltar.component.html',
    styleUrls: ['./botao-voltar.component.css']
})
export class BotaoVoltarComponent implements OnInit {

  @Output() public voltaInicio:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public voltar():void{
    this.voltaInicio.emit('voltaInicio')
  }

}
