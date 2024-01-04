import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JumboComponent } from './home/jumbo/jumbo.component';
import { ChiSiamoComponent } from './home/chi-siamo/chi-siamo.component';
import { CosaFacciamoComponent } from './home/cosa-facciamo/cosa-facciamo.component';
import { ProgettiComponent } from './home/progetti/progetti.component';
import { LavoratoConComponent } from './home/lavorato-con/lavorato-con.component';
import { ContattiComponent } from './home/contatti/contatti.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JumboComponent,
    ChiSiamoComponent,
    CosaFacciamoComponent,
    ProgettiComponent,
    LavoratoConComponent,
    ContattiComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
