import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class CarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: mapOptions.center.lat,
        lng: mapOptions.center.lng,
      },
    };
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.car) {
      this.props.fetchCar(this.props.carId);
    } else {
      this.registerListeners();
    }

    this.search = this.props.location.search;
    this.newURL = new URLSearchParams(this.search);
    const newLat = parseFloat(this.newURL.get('lat'));
    const newLng = parseFloat(this.newURL.get('lng'));
    const center = { lat: newLat, lng: newLng };

    if (this.props.location.search === '') {
      this.props.history.push(`/cars?lat=${this.state.center.lat}&lng=${this.state.center.lng}`);
    } else {
      this.setState({ center });
      this.map.setCenter(center);
    }

    this.MarkerManager.updateMarkers(this.props.cars);
  }

  componentDidUpdate(prevProps) {
    if (this.props.car) {
      const targetCarKey = Object.keys(this.props.cars)[0];
      const targetCar = this.props.cars[targetCarKey];
      this.MarkerManager.updateMarkers([targetCar]);
    }

    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search === '') {
        this.props.history.push(`/cars?lat=${this.state.center.lat}&lng=${this.state.center.lng}`);
      }

      this.search = this.props.location.search;
      this.newURL = new URLSearchParams(this.search);
      const newLat = parseFloat(this.newURL.get('lat'));
      const newLng = parseFloat(this.newURL.get('lng'));
      const center = { lat: newLat, lng: newLng };
      this.setState({ center });
      this.map.setCenter(center);
    }
    this.MarkerManager.updateMarkers(this.props.cars);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updateFilter('bounds', bounds);
    });
  }

  handleMarkerClick(car) {
    this.props.history.push(`cars/${car.id}`);
  }

  render() {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
}

export default withRouter(CarMap);