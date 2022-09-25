import {  NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/craer-pro/producto.component';
import { AdmiComponent } from './pages/admi/admi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


const App_Routing: Routes = [
  {path:'',component: InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'admi',component:AdmiComponent},
  {path:'producto',component:ProductoComponent},
  {path:'productos',component:ProductosComponent},
  {path :'usuario', component:UsuarioComponent},
  {path:'**',pathMatch:'full', redirectTo: ''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(App_Routing, {useHash:true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting {}






