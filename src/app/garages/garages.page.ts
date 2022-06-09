import { next } from './+state/garage.actions';
import { GarageFacade } from './+state/garage.facade';

import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-garages',
  templateUrl: './garages.page.html',
  styleUrls: ['./garages.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaragesPage{
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  //TODO: add catchError
  public garages$ = this.garages.getGarages$;

  constructor(private garages: GarageFacade) {}

  public removeWeirdChars(input: string): string {
    return input.replace('? ','');
  }
  public addSearch(searchField: any): void {
    this.garages.addSearchField(searchField.target.value);
  }
}

