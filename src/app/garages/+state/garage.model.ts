/* eslint-disable @typescript-eslint/naming-convention */
export interface GarageDBItem {
  nhits: number;
  parameters: Parameters;
  records: Set<Record>;
  facet_groups: Array<FacetGroup>;

}

export interface Parameters {
  dataset: string;
  q?: string; // zoeken in volledige tekst
  lang?: string; //default = nl 2letterige taalcode
  rows: number;
  start: number; //for pagination
  sort?: Array<string>; //Sorteer uitdrukking (veld of -veld)
  facet?: Array<string>; //Naam van facetten die moeten worden geactiveerd in de resultaten
  format: string;
  timezone: string;
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
/**
 * Enumerate facet values for datasets and returns a list of values for each facet.
 * Can be used to implement guided navigation in large result sets.
 */
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
