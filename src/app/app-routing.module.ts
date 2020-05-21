import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BroadLaneComponent } from './broad-lane/broad-lane.component';

import { TablicaComponent } from './tablica/tablica.component';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';


const routes: Routes = [
   { path: 'broadlane', component: BroadLaneComponent },
   { path: 'test5', component: Test5Component },
   { path: 'test6', component: Test6Component },
  { path: 'tablica', component: TablicaComponent, outlet: 'sidebar' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
