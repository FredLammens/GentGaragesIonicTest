import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageDetailPageRoutingModule } from './garage-detail-routing.module';

import { GarageDetailPage } from './garage-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageDetailPageRoutingModule
  ],
  declarations: [GarageDetailPage]
})
export class GarageDetailPageModule {}
