import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AdmiComponent } from './pages/admi/admi.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductoComponent } from './components/craer-pro/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavAdmiComponent } from './shared/nav-admi/nav-admi.component';
import { FooterComponent } from './shared/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    BlogComponent,
    ContactoComponent,
    AdmiComponent,
    NavbarComponent,
    ProductoComponent,
    UsuarioComponent,
    NavAdmiComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
