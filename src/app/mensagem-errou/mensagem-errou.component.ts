import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mensagem-errou',
  templateUrl: './mensagem-errou.component.html',
  styleUrls: ['./mensagem-errou.component.css']
})
export class MensagemErrouComponent implements OnInit {

  @Output() public reiniciou:EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public reiniciaJogo():void{
    this.reiniciou.emit('reiniciou')
  }

  
}
