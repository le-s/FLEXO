import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import "core-js/stable";
import "regenerator-runtime/runtime";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment'
import Time from '../search/time';

class RentalCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: this.props.formFields,
      from: null,
      to: null,
      timeFrom: "10:00:00",
      timeTo: "10:00:00"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.formatSubmitDate = this.formatSubmitDate.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.timeFromChange = this.timeFromChange.bind(this);
    this.timeToChange = this.timeToChange.bind(this);
    this.resetFormField = this.resetFormField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let rental = Object.assign({}, this.state.formFields);
    this.props.createRental(rental).then(() => {
      this.props.history.push('/rentals');
    })
  }

  formatSubmitDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  formatTime(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${hour}:${minute}:${second}`;
  }

  async resetFormField() {
    let fromDate = this.formatSubmitDate(this.state.from);
    let toDate = this.formatSubmitDate(this.state.to);
    let formFields = { ...this.props.formFields };

    formFields.reserveDate = `${fromDate} ${this.state.timeFrom}`;
    formFields.returnDate = `${toDate} ${this.state.timeTo}`;
    formFields.carId = this.props.car.id;

    await this.setState({ formFields });
  }

  async handleFromChange(from) {
    await this.setState({ from });

    this.resetFormField()
  }

  async handleToChange(to) {
    await this.setState({ to });

    this.resetFormField()
  }

  async timeFromChange(e) {
    await this.setState({ timeFrom: e.currentTarget.value })

    this.resetFormField()
  }
  
  async timeToChange(e) {
    await this.setState({ timeTo: e.currentTarget.value })

    this.resetFormField()
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    return (
      <>
        <form className="reservationBox-section" onSubmit={this.handleSubmit}>
          <div className="dateTimeRangePicker-fieldGroup">
            <label className="dateTimeRangePicker-label">Trip start</label>
            <div className="dateTimeRangePicker-dateTime">
              <div className="InputFromTo dateTimeRangePicker-date">
                <DayPickerInput
                  value={`${formatDate(new Date())}`}
                  formatDate={formatDate}
                  parseDate={parseDate}
                  onDayClick={this.handleDayClick}
                  // selectedDays={this.state.selectedDay}
                  dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { after: to, before: new Date() },
                    toMonth: to,
                    modifiers,
                  }}
                  onDayChange={this.handleFromChange}
                  id="from-day"
                />
              </div>
              <div className="dateTimeRangePicker-date">
                <Time timeChange={this.timeFromChange}/>
              </div>
            </div>
          </div>

          <div className="dateTimeRangePicker-fieldGroup trip-end">
            <label className="dateTimeRangePicker-label">Trip end</label>
            <div className="dateTimeRangePicker-dateTime">
              <div className="InputFromTo dateTimeRangePicker-date">
                <DayPickerInput
                  ref={el => (this.to = el)}
                  value={`${formatDate(moment().add(7, 'days'))}`}
                  formatDate={formatDate}
                  parseDate={parseDate}
                  onDayClick={this.handleDayClick}
                  // selectedDays={this.state.selectedDay}
                  dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { before: from },
                    modifiers,
                    month: from,
                    fromMonth: from,
                  }}
                  onDayChange={this.handleToChange}
                  id="to-day"
                />
              </div>
              <div className="dateTimeRangePicker-date">
                <Time timeChange={this.timeToChange}/>
              </div>
            </div>
          </div>
          <div className="rent-container">
            <button onSubmit={this.handleSubmit} className="rent-button">Book rental</button>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(RentalCreate);