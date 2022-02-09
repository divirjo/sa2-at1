import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste2/teste2.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    Teste2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
