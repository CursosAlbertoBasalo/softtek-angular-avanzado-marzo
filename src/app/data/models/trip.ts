export enum TripKinds {
  TRIP_ONLY,
  WITH_STAY,
}

export enum TripStatus {
  WAITING,
  CANCELLED,
  CONFIRMED,
}

export type Trip = {
  id: string | undefined;
  operatorId: string;
  operatorTripCode: string | undefined;
  destination: string;
  startDate: Date;
  endDate: Date;
  flightPrice: number;
  stayingNightPrice: number;
  kind: TripKinds;
  status: TripStatus;
  extraLuggagePricePerKilo: number;
  premiumFoodPrice: number;
  places: number;
};
