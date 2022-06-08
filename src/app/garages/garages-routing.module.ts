import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaragesPage } from './garages.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'',component: GaragesPage},
      {path:':id',  loadChildren: () => import('./garage-detail/garage-detail.module').then( m => m.GarageDetailPageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaragesPageRoutingModule {}
