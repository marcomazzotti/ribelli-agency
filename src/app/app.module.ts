import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JumboComponent } from './home/jumbo/jumbo.component';
import { ChiSiamoComponent } from './home/chi-siamo/chi-siamo.component';
import { CosaFacciamoComponent } from './home/cosa-facciamo/cosa-facciamo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JumboComponent,
    ChiSiamoComponent,
    CosaFacciamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
