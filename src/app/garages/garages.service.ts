import { HttpClient, HttpParams } from '@angular/common/http';
import { GarageDBItem } from './garage.model';
import { Injectable } from '@angular/core';
import { Parameters } from './garage.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GaragesService {

  constructor(private http: HttpClient ) { }

  public getAllGarages(): Observable<GarageDBItem> {
    const call = 'https://data.stad.gent/api/records/1.0/search/';
    /**
     *       sort :[
      '-occupation',
      ],
      facet : [
      'name' ,
      'lastupdate',
      'description',
      'categorie'
      ] ,
     */
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
    return this.http.get<GarageDBItem>(call ,{params});
  }
}
