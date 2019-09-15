class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(cars) {
    const carsObj = {};
    cars.forEach(car => carsObj[car.id] = car);

    cars
      .filter(car => !this.markers[car.id])
      .forEach(newCar => this.createMarkerFromCar(newCar, this.handleClick));

    Object.keys(this.markers)
      .filter(carId => !carsObj[carId])
      .forEach((carId) => this.removeMarker(this.markers[carId]));
  }

  createMarkerFromCar(car) {
    const position = new google.maps.LatLng(car.latitude, car.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      carId: car.id,
    });

    marker.addListener('click', () => this.handleClick(car));
    this.markers[marker.carId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.carId].setMap(null);
    delete this.markers[marker.carId];
  }
}

export default MarkerManager;