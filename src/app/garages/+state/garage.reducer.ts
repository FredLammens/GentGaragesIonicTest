import { createReducer, on, Action } from '@ngrx/store';
import { getSimplifiedUsersListSuccess } from './garage.actions';
import { GarageState } from './garage.state';
export const GARAGE_LIS_FEATURE_KEY = 'garageList';
export const defaultState: GarageState = {
  garages:null,
};
const reducer = createReducer(
  defaultState,
  on(getSimplifiedUsersListSuccess, (state,action) => ({
    ...state,
    garages:action.response
  })),
);

export const garagesListReducer = (
  state: GarageState, action: Action
  ): GarageState => reducer(state,action);
