import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto = new ProductoModel();

  constructor( private productoServices: ProductoService) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){

    Swal.fire({

      title:'Espere',
      text:'Guardar Informacion',
      icon:'info'
    })

    Swal.showLoading();

    let peticion: Observable<any>;



    if(this.producto.id){
      peticion = this.productoServices.actualizar(this.producto);
    }else{
      peticion = this.productoServices.crearproducto(this.producto);
    }

    peticion.subscribe( resp=>{
      Swal.fire({
        title:this.producto.nombre,
        text:'Se Guardo Correctamente',
        icon:'success'
      })
    })

    form.reset();

}

}
