import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { FlightsTableComponent } from './components/flights-table/flights-table.component';
import { InformationComponent } from './components/information/information.component';
import {PrettyTimePipe} from './components/pipes/pretty-time-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    FlightsTableComponent,
    InformationComponent,
    PrettyTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
