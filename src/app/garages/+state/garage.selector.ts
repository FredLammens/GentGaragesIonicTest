import { GarageState } from './garage.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GARAGE_LIS_FEATURE_KEY } from './garage.reducer';

const garageState = createFeatureSelector<GarageState>(
  GARAGE_LIS_FEATURE_KEY,
);
export const getGarages = createSelector(
  garageState,
  (state) => state.garages,
);

export const getGarageById = ( garageId: string) => createSelector(
  garageState,
  (state) => state.garages.records.find(g => g.recordid === garageId),
);
