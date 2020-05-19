import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { BroadLaneComponent } from './broad-lane/broad-lane.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuhilComponent } from './auhil/auhil.component';
import { Test5Component } from './test5/test5.component';
import { TablicaComponent } from './tablica/tablica.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BroadLaneComponent, AuhilComponent, Test5Component, TablicaComponent,   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
