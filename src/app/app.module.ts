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
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Test1Component } from './test1/test1.component';

@NgModule({
  imports:      [ BrowserModule,   NgxEchartsModule.forRoot({ echarts }),   FormsModule,AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BroadLaneComponent, AuhilComponent, Test5Component, TablicaComponent, Test1Component,   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
