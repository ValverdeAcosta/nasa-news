import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NasaService } from '../../core/services/nasa.service'
import { NasaStore } from '../../shared/store/nasa.store';
import { DateFormat } from '../../shared/helpers/date.format';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    NasaService,
    NasaStore,
    DateFormat,
    AppRoutingModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }