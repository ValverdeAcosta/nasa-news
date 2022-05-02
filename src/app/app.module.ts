import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config/config.service';
import { NasaStore } from './shared/store/nasa.store';
import { DateFormat } from './shared/helpers/date.format';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
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
