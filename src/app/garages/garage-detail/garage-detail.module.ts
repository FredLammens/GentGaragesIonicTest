import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageDetailPageRoutingModule } from './garage-detail-routing.module';

import { GarageDetailPage } from './garage-detail.page';
import { GarageFacade } from '../+state/garage.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageDetailPageRoutingModule,
  ],
  providers: [GarageFacade],
  declarations: [GarageDetailPage]
})
export class GarageDetailPageModule {}
