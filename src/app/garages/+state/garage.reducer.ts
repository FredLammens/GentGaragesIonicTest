import { createReducer, on, Action } from '@ngrx/store';
import { getGaragesListSuccess } from './garage.actions';
import { GarageState } from './garage.state';
export const GARAGE_LIS_FEATURE_KEY = 'garageList';
export const defaultState: GarageState = {
  garages:null,
};
const reducer = createReducer(
  defaultState,
  on(getGaragesListSuccess, (state,action) => ({
    ...state,
    garages:action.response
  })),
);

export const garagesListReducer = (
  state: GarageState, action: Action
  ): GarageState => reducer(state,action);
