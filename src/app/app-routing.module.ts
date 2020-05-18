import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BroadLaneComponent } from './broad-lane/broad-lane.component';

import { AuhilComponent } from './auhil/auhil.component';
import { Test5Component } from './test5/test5.component';


const routes: Routes = [
   { path: 'broadlane', component: BroadLaneComponent },
   { path: 'test5', component: Test5Component },
  { path: 'component-aux', component: AuhilComponent, outlet: 'sidebar' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
