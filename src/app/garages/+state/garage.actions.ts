import { createAction, props } from '@ngrx/store';
import { GarageDBItem } from './garage.model';

/** Action to start getting the list of garages */
export const getGaragesListStart = createAction(
  '[GARAGE LIST] Get garages List Start',
);

/** Action getting the list of garages success */
export const getGaragesListSuccess = createAction(
  '[GARAGE LIST] Get garages List Success',
  props<{ response: GarageDBItem}>(),
);
