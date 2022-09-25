import { Component,OnInit} from '@angular/core';
import { ProductoInt } from 'src/app/interfaces/inteface-producto';
import { ProductoModel } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

   public producto:any = [];

  constructor(private prodServices:ProductoService) {

    this.prodServices.ObtenerProducto()
                  .subscribe( (resp) =>{
                    this.producto = resp.map( (prod:ProductoInt)=>{
                      console.log(prod)
                      return prod
                    })

                  });

   }

  ngOnInit(){


  }

}
