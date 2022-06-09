import { createAction, props } from '@ngrx/store';
import { GarageDBItem } from './garage.model';

/** Action to start getting the list of garages */
export const getSimplifiedUsersListStart = createAction(
  '[GARAGE LIST] Get garages List Start',
);

/** Action getting the list of garages success */
export const getSimplifiedUsersListSuccess = createAction(
  '[GARAGE LIST] Get garages List Success',
  props<{ response: GarageDBItem}>(),
);
