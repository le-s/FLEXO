import React from 'react';
// import MarkerManager from '../../util/marker_manager';

class CarMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.car.latitude, lng: this.props.car.longitude },
      zoom: 14
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map, null, true)
    // this.MarkerManager.updateMarkers([this.props.car])
  }

  render() {
    return (
      <div id='show-map-container' ref={ map => this.mapNode = map } />
    )
  }
}

export default CarMap;