import React from 'react';
// import MarkerManager from '../../util/marker_manager';

class CarMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  componentDidUpdate() {
    if (this.props.singleBench) {
      const targetBenchKey = Object.keys(this.props.benches)[0];
      const targetBench = this.props.benches[targetBenchKey];
      this.MarkerManager.updateMarkers([targetBench]); //grabs only that one bench
    } else {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
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
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`benches/${bench.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'benches/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   const mapOptions = {
  //     center: { lat: this.props.car.latitude, lng: this.props.car.longitude },
  //     zoom: 14
  //   }
  //   this.map = new google.maps.Map(this.mapNode, mapOptions);
  //   // this.MarkerManager = new MarkerManager(this.map, null, true)
  //   // this.MarkerManager.updateMarkers([this.props.car])
  // }

  // render() {
  //   return (
  //     <div id='show-map-container' ref={ map => this.mapNode = map } />
  //   )
  // }
}

export default CarMap;