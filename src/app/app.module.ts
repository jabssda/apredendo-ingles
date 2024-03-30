import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PainelComponent } from './componentes/painel/painel.component';
import { TentativasComponent } from './componentes/tentativas/tentativas.component';
import { ProgressoComponent } from './componentes/progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
