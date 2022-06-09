import { GaragesService } from './garages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaragesPageRoutingModule } from './garages-routing.module';

import { GaragesPage } from './garages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaragesPageRoutingModule
  ],
  declarations: [GaragesPage]
})
export class GaragesPageModule {}
