import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageDetailPageRoutingModule } from './garage-detail-routing.module';

import { GarageDetailPage } from './garage-detail.page';
import { EffectsModule } from '@ngrx/effects';
import { garagesListReducer, GARAGE_LIS_FEATURE_KEY } from '../+state/garage.reducer';
import { GarageEffects } from '../+state/garage.effects';
import { StoreModule } from '@ngrx/store';
import { GaragesService } from '../+state/garages.service';
import { GarageFacade } from '../+state/garage.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageDetailPageRoutingModule,
    EffectsModule.forFeature([GarageEffects]),
    StoreModule.forFeature(
      GARAGE_LIS_FEATURE_KEY,
      garagesListReducer,
    ),
  ],
  providers: [GarageFacade, GaragesService],
  declarations: [GarageDetailPage]
})
export class GarageDetailPageModule {}
