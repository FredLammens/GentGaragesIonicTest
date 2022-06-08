import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-garages',
  templateUrl: './garages.page.html',
  styleUrls: ['./garages.page.scss'],
})
export class GaragesPage{
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  // eslint-disable-next-line max-len
  // https://data.stad.gent/explore/dataset/bezetting-parkeergarages-real-time/map/?sort=-occupation&location=15,51.04844,3.72267&basemap=jawg.streets
  loadData(event) {
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

}