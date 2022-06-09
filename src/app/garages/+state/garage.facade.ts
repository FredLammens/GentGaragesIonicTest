import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getGaragesListStart } from './garage.actions';
import { getGarages, getGarageById } from './garage.selector';
import { Record } from './garage.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GarageFacade {
  public getGarages$ = this.store.select(getGarages).pipe(
    catchError(err => of([]))
  );

  constructor(private store: Store) {
    this.store.dispatch(getGaragesListStart());
  }

  public getGarageById(garageId: string): Observable<Record> {
    return this.store.select(getGarageById(garageId));
  }
}
