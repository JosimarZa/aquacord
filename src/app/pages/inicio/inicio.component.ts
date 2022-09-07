import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, DoCheck  {

tamano:Number;


  constructor() {
    this.tamano = 0;
   }

   ver(){
    this.tamano = screen.width;
    console.log(this.tamano);
   }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.ver();
  }

}
