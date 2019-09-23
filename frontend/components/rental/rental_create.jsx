import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment'
import Time from '../search/time';

class RentalCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: this.props.formFields,
      from: undefined,
      to: undefined,
    
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    
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
                />
              </div>
              <div className="dateTimeRangePicker-date">
                <Time />
              </div>
            </div>
          </div>

          <div className="dateTimeRangePicker-fieldGroup">
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
                />
              </div>
              <div className="dateTimeRangePicker-date">
                <Time />
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default RentalCreate;