export interface Garage {
  city: {id: number;name: string};
  totalcapacity: number;
  parkingstatus: {
    activeRoute: string;
    lastModifiedDate: string;
     availableCapacity: number;
     suggestedCapacity: string;
     open: boolean;
      totalCapacity: number;
    };

}
