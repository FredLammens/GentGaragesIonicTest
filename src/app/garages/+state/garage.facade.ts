import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSearch, getGaragesListStart, next } from './garage.actions';
import { getGarages, getGarageById } from './garage.selector';
import { Record } from './garage.model';
import { Observable } from 'rxjs';

@Injectable()
export class GarageFacade {
  public getGarages$ = this.store.select(getGarages);

  constructor(private store: Store) {
    this.store.dispatch(getGaragesListStart());
  }

  public getGarageById(garageId: string): Observable<Record> {
    return this.store.select(getGarageById(garageId));
  }
  public next(): void {
    this.store.dispatch(next());
  }
  public addSearchField(searchField: string): void {
    this.store.dispatch(addSearch({searchField}));
  }
}
