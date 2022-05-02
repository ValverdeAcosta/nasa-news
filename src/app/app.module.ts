import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config/config.service';
import { NasaStore } from './shared/store/nasa.store';
import { DateFormat } from './shared/helpers/date.format';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService, NasaStore, DateFormat],
  bootstrap: [AppComponent]
})
export class AppModule { }
