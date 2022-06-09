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
  (state) => {
    const records = Array.from( state.garages.records);
    return records.find(g => g.recordid === garageId);
  },
);

export const getParameters = createSelector(
  garageState,
  (state) => state.garages.parameters
);
