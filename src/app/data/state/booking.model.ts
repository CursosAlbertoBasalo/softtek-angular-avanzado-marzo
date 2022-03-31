export interface Booking {
  id: number | string;
  tripId: string;
  clientId: string;
  passengers: number;
}

export function createBooking(params: Partial<Booking>) {
  return {} as Booking;
}
