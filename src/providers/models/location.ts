export class Location {
    locationName: String;
    address: String;
    postalCode: String;
    country: String;
    city: String;
    lat: Number;
    lng: Number;

  constructor() {
    this.locationName = '';
    this.address = '';
    this.postalCode = null;
    this.country = '';
    this.city = '';
    this.lat = null;
    this.lng = null;
  }
}
