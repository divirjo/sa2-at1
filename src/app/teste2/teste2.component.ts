import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
})
export class Teste2Component implements OnInit {

  nome: string = 'Vitor';
  idade: number = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
