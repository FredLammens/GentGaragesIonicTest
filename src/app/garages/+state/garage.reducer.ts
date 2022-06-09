/* eslint-disable @typescript-eslint/naming-convention */
import { createReducer, on, Action } from '@ngrx/store';
import { getGaragesListSuccess,next,addSearch } from './garage.actions';
import { GarageState } from './garage.state';
export const GARAGE_LIS_FEATURE_KEY = 'garageList';
export const defaultState: GarageState = {
  garages:{
    nhits: 0,
    parameters: {
      dataset: 'bezetting-parkeergarages-real-time',
      rows :20,
      start :0,
      format :'json',
      timezone :'UTC',
    },
    records: new Set(),
    facet_groups: []
   },
};
const reducer = createReducer(
  defaultState,
  on(getGaragesListSuccess, (state,action) => ({
    ...state,
    garages: action.response,
  })),
  on(next, (state,action) => ({
    ...state,
    garages: {
      ...state.garages,
      parameters: {
        ...state.garages.parameters,
        start: state.garages.parameters.start + 1,
      }
    }
  })),
  on(addSearch, (state,action) => ({
    ...state,
    garages: {
      ...state.garages,
      parameters: {
        ...state.garages.parameters,
        q: action.searchField,
      }
    }
  })),
);

export const garagesListReducer = (
  state: GarageState, action: Action
  ): GarageState => reducer(state,action);
