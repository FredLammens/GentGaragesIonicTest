/* eslint-disable @typescript-eslint/naming-convention */
export interface GarageDBItem {
  nhits: number;
  parameters: Parameters;
  records: Array<Record>;
  facet_groups: Array<FacetGroup>;

}

export interface Parameters {
  dataset: string;
  rows: number;
  start: number;
  sort: Array<string>;
  facet: Array<string>;
  format: string;
  timeZone: string;
}

export interface Record {
  datasetid: string;
  recordid: string;
  fields: Field;
  geometry: GeoMetry;
  record_timestamp: string;
}

export interface Field {
  occupation: number;
  isopennow: boolean;
  operatorinformation: string;
  locationanddimension: LocationAndDimension;
  occupancytrend: string;
  availablecapacity: number;
  urllinkaddress: string;
  id: string;
  description: string;
  lastupdate: string;
  name: string;
  openingtimesdescription: string;
  temporaryclosed: boolean;
  type: string;
  categorie: string;
  totalcapacity: number;
  text: string;
  freeparking: boolean;
  location: Array<number>;
}

export interface LocationAndDimension {
  specificAccessInformation: Array<string>;
  level: string;
  roadNumber: string;
  roadName: string;
  coordinatesForDisplay: CoorDisplay;

}

export interface CoorDisplay {
  latitude: number;
  longtitude: number;
}

export interface GeoMetry {
  type: string;
  coordinates: Array<number>;
}

export interface FacetGroup {
  name: string;
  facets: Array<Facet>;
}

export interface Facet {
  name: string;
  count: number;
  state: string;
  path: string;
}
