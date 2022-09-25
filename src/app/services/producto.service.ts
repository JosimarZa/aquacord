import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { map } from 'rxjs/operators';
import { ProductoInt } from '../interfaces/inteface-producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http: HttpClient) { }

  private url = 'https://aquacor-d1bec-default-rtdb.firebaseio.com'


  crearproducto(producto:ProductoModel){
    return this.http.post(`${this.url}/productos.json`,producto)
                .pipe( map((resp:any) =>{
                    producto.id = resp.name;
                    return producto;
                }));
  }


  actualizar(producto:ProductoModel){

    const protemp = {
      ...producto
    };

    delete protemp.id;

    return this.http.put(`${this.url}/productos/${producto.id}.json`,protemp);
  }


ObtenerProducto(){

  return this.http.get<ProductoModel>(`${this.url}/productos/.json`)
          .pipe(
            map(this.CrearArreglo)
          )


}
private CrearArreglo(Obj:object){

  let product:any= [];
  product = Object.values(Obj);

  return product

}





}



