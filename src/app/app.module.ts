import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BroadLaneComponent } from './broad-lane/broad-lane.component';
import { Test5Component } from './test5/test5.component';
import { TablicaComponent } from './tablica/tablica.component';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Test6Component } from './test6/test6.component';
import { PIStationDirective } from './test5/pistation.directive';
import { Test7Component } from './test7/test7.component';
import { Test8Component } from './test8/test8.component';

@NgModule({
  imports:      [ BrowserModule,   NgxEchartsModule.forRoot({ echarts }),   FormsModule,AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BroadLaneComponent, Test5Component, TablicaComponent, Test6Component, PIStationDirective, Test7Component, Test8Component,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
