import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-tentativas',
    templateUrl: './tentativas.component.html',
    styleUrls: ['./tentativas.component.css'],
    standalone: false
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
