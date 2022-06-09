import { GaragesService } from './garages.service';
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garages',
  templateUrl: './garages.page.html',
  styleUrls: ['./garages.page.scss'],
})
export class GaragesPage{
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  //TODO: add catchError
  public garages$ = this.garages.getAllGarages().pipe(tap(val => console.log(val)));

  constructor(private garages: GaragesService,private router: Router) {}

  public loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (false) {
        event.target.disabled = true;
      }
    }, 500);
  }
  public removeWeirdChars(input: string): string {
    return input.replace('? ','');
  }
}

