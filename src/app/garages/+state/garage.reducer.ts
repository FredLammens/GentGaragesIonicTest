/* eslint-disable @typescript-eslint/naming-convention */
import { createReducer, on, Action } from '@ngrx/store';
import { getGaragesListSuccess } from './garage.actions';
import { GarageState } from './garage.state';
export const GARAGE_LIS_FEATURE_KEY = 'garageList';
export const defaultState: GarageState = {
  garages:{
    nhits: 0,
    parameters: {
      dataset: 'bezetting-parkeergarages-real-time',
      rows :10,
      start :0,
      format :'json',
      timezone :'UTC',
    },
    records: [],
    facet_groups: []
   },
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
