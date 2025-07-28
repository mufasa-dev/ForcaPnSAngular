import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-press-start',
    templateUrl: './press-start.component.html',
    styleUrls: ['./press-start.component.css']
})
export class PressStartComponent implements OnInit {


  @Output() public iniciou:EventEmitter<string> = new EventEmitter();
  @Output() public ajuda:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public iniciaJogo():void{
    this.iniciou.emit('iniciou')
  }

  public ajudando():void{
    this.ajuda.emit('ajuda')
  }

}
