import {  NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AdmiComponent } from './pages/admi/admi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';


const App_Routing: Routes = [
  {path:'',component: InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'productos',component:ProductosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'admi',component:AdmiComponent},
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






