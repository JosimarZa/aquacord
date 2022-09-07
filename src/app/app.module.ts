import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AdmiComponent } from './pages/admi/admi.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    BlogComponent,
    ContactoComponent,
    AdmiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
