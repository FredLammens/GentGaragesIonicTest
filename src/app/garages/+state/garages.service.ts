import { HttpClient, HttpParams } from '@angular/common/http';
import { GarageDBItem } from './garage.model';
import { Injectable } from '@angular/core';
import { Parameters } from './garage.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class GaragesService {
  // eslint-disable-next-line max-len
  // https://data.stad.gent/explore/dataset/bezetting-parkeergarages-real-time/map/?sort=-occupation&location=15,51.04844,3.72267&basemap=jawg.streets
  constructor(private http: HttpClient ) { }

  public getAllGarages(parameters: Parameters): Observable<GarageDBItem> {
    const call = 'https://data.stad.gent/api/records/1.0/search/';
    let params = new HttpParams();
    //TODO: add check for arrays if array all seperate with same key
    Object.entries(parameters).forEach(([key,value]) => {
      if(value){
        params = params.set(key,value);
      }
    });
    return this.http.get<GarageDBItem>(call ,{params});
  }
}
