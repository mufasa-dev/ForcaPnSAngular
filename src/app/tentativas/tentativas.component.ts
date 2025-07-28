import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-tentativas',
    templateUrl: './tentativas.component.html',
    styleUrls: ['./tentativas.component.css'],
    imports: [BrowserModule]
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
