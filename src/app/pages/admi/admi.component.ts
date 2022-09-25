import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoModel } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {

  producto =  new ProductoModel();

  constructor(private productoServices:ProductoService) {



  }



  ngOnInit(): void {
  }

}
