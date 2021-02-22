import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador.nodule';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
