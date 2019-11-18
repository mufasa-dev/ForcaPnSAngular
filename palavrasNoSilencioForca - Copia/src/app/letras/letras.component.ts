import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {

  @Output() public escolheuLetra:EventEmitter<string> = new EventEmitter();

  //Letras usadas
  public alfabeto:string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W' ,'X', 'Y', 'Z', 'Ç'
  ]

  @Input() public letrasUsadas:boolean[] = [
    false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
  ]

  constructor() { }

  ngOnInit() {
  }

  public validarLetra(letra:string):void{
    let posi:number = this.alfabeto.indexOf(letra);
    if(this.letrasUsadas[posi]){
      return;
    }
    this.letrasUsadas[posi] = true;
    this.escolheuLetra.emit(letra);
  }

}
