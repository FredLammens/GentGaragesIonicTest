import { GarageFacade } from './+state/garage.facade';
import { GaragesService } from './+state/garages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaragesPageRoutingModule } from './garages-routing.module';

import { GaragesPage } from './garages.page';
import { EffectsModule } from '@ngrx/effects';
import { GarageEffects } from './+state/garage.effects';
import { StoreModule } from '@ngrx/store';
import { garagesListReducer, GARAGE_LIS_FEATURE_KEY } from './+state/garage.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaragesPageRoutingModule,
    EffectsModule.forFeature([GarageEffects]),
    StoreModule.forFeature(
      GARAGE_LIS_FEATURE_KEY,
      garagesListReducer,
    ),
  ],
  providers: [GarageFacade, GaragesService],
  declarations: [GaragesPage]
})
export class GaragesPageModule {}
