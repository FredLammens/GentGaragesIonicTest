import { GaragesService } from './garages.service';
import { Observable } from 'rxjs/internal/Observable';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { getGaragesListStart, getGaragesListSuccess } from './garage.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { getParameters } from './garage.selector';

@Injectable()
export class GarageEffects {
  public getGaragesList$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(getGaragesListStart),
    withLatestFrom(this.store.select(getParameters)),
    switchMap(([_,parameters]) => this.garagesService.getAllGarages(parameters)
    .pipe(
        map((response) =>
          getGaragesListSuccess({response}
          )),
    ))
));

  constructor(
    private garagesService: GaragesService,
    private actions$: Actions,
    private store: Store,
  ) {}
}
