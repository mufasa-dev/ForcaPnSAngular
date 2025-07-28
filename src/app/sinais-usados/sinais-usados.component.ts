import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-sinais-usados',
    templateUrl: './sinais-usados.component.html',
    styleUrls: ['./sinais-usados.component.css']
})
export class SinaisUsadosComponent implements OnInit {

  @Output() public fecharSinais = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public fechou():void{
    this.fecharSinais.emit('fechou');
  }


}
