import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment'
import Time from './time';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '', 
      from: undefined,
      to: undefined,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById('search-bar')
    let autocomplete = new google.maps.places.Autocomplete(input);
    let address;
    google.maps.event.addDomListener(window, 'load', autocomplete);
    autocomplete.addListener('place_changed',() => {
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

  handleChange(address) {
    this.setState({ address })
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    return(
      <div className="search-container">
        <div className="splash-search-form">
          <div className="splash-where">
            <label>Where</label>
            <input
              placeholder='Enter city, airport, or address'
              className='input-search-sizing'
              id='search-bar'
              onChange={this.handleChange}
            />
          </div>
          <div className="splash-where from-until">
            <div className="splash-date-container">
              <label>From</label>
              <div className="splash-dateTime-container">
                <div className="date-search-sizing InputFromTo">
                  <DayPickerInput 
                    value={`${formatDate(new Date())}`}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    onDayClick={this.handleDayClick} 
                    selectedDays={this.state.selectedDay} 
                    dayPickerProps={{
                      selectedDays: [from, { from, to }],
                      disabledDays: { after: to, before: new Date() },
                      toMonth: to,
                      modifiers,
                    }}
                    onDayChange={this.handleFromChange}
                  />
                </div>
                <div className="splash-time-dropdown-wrapper">
                  <Time />
                </div>
              </div>
            </div>
          </div>
          <div className="splash-where from-until">
            <div className="splash-date-container">
              <label>Until</label>
              <div className="splash-dateTime-container">
                <div className="date-search-sizing InputFromTo">
                  <DayPickerInput 
                    ref={el => (this.to = el)}
                    value={`${formatDate(moment().add(7, 'days'))}`}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    onDayClick={this.handleDayClick} 
                    selectedDays={this.state.selectedDay} 
                    dayPickerProps={{
                      selectedDays: [from, { from, to }],
                      disabledDays: { before: from },
                      modifiers,
                      month: from,
                      fromMonth: from,
                    }}
                    onDayChange={this.handleToChange}
                  />
                </div>
                <div className="splash-time-dropdown-wrapper">
                  <Time />
                </div>
              </div>
            </div>
          </div>
          <div />
          <button className="button-search" onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar);