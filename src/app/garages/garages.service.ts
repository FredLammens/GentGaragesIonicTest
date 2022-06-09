import { catchError, filter, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GarageDBItem,Record } from './garage.model';
import { Injectable } from '@angular/core';
import { Parameters } from './garage.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { EMPTY, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaragesService {
  private garages: GarageDBItem = null;
  // eslint-disable-next-line max-len
  // https://data.stad.gent/explore/dataset/bezetting-parkeergarages-real-time/map/?sort=-occupation&location=15,51.04844,3.72267&basemap=jawg.streets
  constructor(private http: HttpClient ) { }

  public getAllGarages(): Observable<GarageDBItem> {
    const call = 'https://data.stad.gent/api/records/1.0/search/';
    const parameters: Parameters = {
      dataset: 'bezetting-parkeergarages-real-time',
      rows :10,
      start :0,
      format :'json',
      timezone :'UTC',
    };
    let params = new HttpParams();
    //TODO: add check for arrays if array all seperate with same key
    Object.entries(parameters).forEach(([key,value]) => {
      if(value){
        params = params.set(key,value);
      }
    });
    return this.http.get<GarageDBItem>(call ,{params}).pipe(tap(garages => this.garages = garages),catchError(err => throwError(err)));
  }
//TODO: check why this gives : Warning: a promise was rejected with a non-error: [object Undefined]
  public getGarageById( garageID: string): Observable<Record> {
    if(!this.garages){
      return EMPTY;
    }
    return from(this.garages.records).pipe(filter((g => g.recordid === garageID )),catchError(err => throwError(err)));
  }
}
