import { GaragesService } from './garages.service';
import { Observable } from 'rxjs/internal/Observable';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { getSimplifiedUsersListStart, getSimplifiedUsersListSuccess } from './garage.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Parameters } from './garage.model';

const parameters: Parameters = {
  dataset: 'bezetting-parkeergarages-real-time',
  rows :10,
  start :0,
  format :'json',
  timezone :'UTC',
};

@Injectable()
export class GarageEffects {
  public getGaragesList$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(getSimplifiedUsersListStart),
    switchMap(() => this.garagesService.getAllGarages(parameters)
    .pipe(
        map((response) => getSimplifiedUsersListSuccess({response})),
        catchError(err => throwError(err))
    ))
  ));

  constructor(
    private garagesService: GaragesService,
    private actions$: Actions,
    private store: Store,
  ) {}
}
