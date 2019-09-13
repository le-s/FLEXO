import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Time from './time';
import { debounce } from 'lodash';
import DayPicker from 'react-day-picker';
import Moment from 'react-moment';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: null }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById('search-bar')
    let autocomplete = new google.maps.places.Autocomplete(input);
    let address;
    google.maps.event.addDomListener(window, 'load', autocomplete);
    autocomplete.addListener('place_changed', () => {
      if (!autocomplete.getPlace().formatted_address) {
        // use input if cannot convert to formatted address
        address = autocomplete.getPlace().name;
        this.setState({ address: address })
      } else {
        // use formatted address if available
        address = autocomplete.getPlace().formatted_address;
        this.setState({ address: address })
      }
    })
  }

  handleSubmit() {
    let lat;
    let lng;
    let coordinates = new google.maps.Geocoder()
    coordinates.geocode({ 'address': this.state.address }, (results, status) => {
      if (status === 'OK') {
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        this.props.history.push(`/cars?lat=${lat}&lng=${lng}`)
      } else {
        lat = 37.773972;
        lng = -122.431297;
        this.props.history.push(`/cars?lat=${lat}&lng=${lng}`)
      }
    })
  }

  handleChange(e) {
    this.setState({ address: e.target.value })
  }

  // handleChange = debounce((e) => {
  //   this.setState({ address: e.target.value })
  // },1000)

  render() {
    return(
      <div className="search-container">
        <div className="splash-search-form">
          <div className="splash-where">
            <label>Where</label>
            <input type="text" placeholder="Enter city, airport, or address" id="search-bar" onChange={this.handleChange} className="input-search-sizing" />
          </div>
          <div className="splash-where from-until">
            <div className="splash-date-container">
              <label>From</label>
              <div className="date-search-sizing">
                <DayPickerInput onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay}
                />
              </div>
            </div>
            <Time />
          </div>
          <div className="splash-where from-until">
            <div className="splash-date-container">
              <label>Until</label>
              <div className="date-search-sizing">
                <DayPickerInput onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} />
              </div>
            </div>
            <Time />
          </div>
          <div />
          <button className="button-search" onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar);