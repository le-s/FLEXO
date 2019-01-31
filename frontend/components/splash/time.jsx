import React from 'react';
import { withRouter } from 'react-router-dom';

class Time extends React.Component {
  render() {
    let timeSlot = 
    <select name="time" className="splash-time-dropdown">
      <option>Midnight</option>
      <option>12:30 AM</option>
      <option>1:00 AM</option>
      <option>1:30 AM</option>
      <option>2:00 AM</option>
      <option>2:30 AM</option>
      <option>3:00 AM</option>
      <option>3:30 AM</option>
      <option>4:00 AM</option>
      <option>4:30 AM</option>
      <option>5:00 AM</option>
      <option>5:30 AM</option>
      <option>6:00 AM</option>
      <option>6:30 AM</option>
      <option>7:00 AM</option>
      <option>7:30 AM</option>
      <option>8:00 AM</option>
      <option>8:30 AM</option>
      <option>9:00 AM</option>
      <option>9:30 AM</option>
      <option>10:00 AM</option>
      <option selected>10:30 AM</option>
      <option>11:00 AM</option>
      <option>11:30 AM</option>
      <option>Noon</option>
      <option>12:30 PM</option>
      <option>1:00 PM</option>
      <option>1:30 PM</option>
      <option>2:00 PM</option>
      <option>2:30 PM</option>
      <option>3:00 PM</option>
      <option>3:30 PM</option>
      <option>4:00 PM</option>
      <option>4:30 PM</option>
      <option>5:00 PM</option>
      <option>5:30 PM</option>
      <option>6:00 PM</option>
      <option>6:30 PM</option>
      <option>7:00 PM</option>
      <option>7:30 PM</option>
      <option>8:00 PM</option>
      <option>8:30 PM</option>
      <option>9:00 PM</option>
      <option>9:30 PM</option>
      <option>10:00 PM</option>
      <option>10:30 PM</option>
      <option>11:00 PM</option>
      <option>11:30 PM</option>
    </select>

    return (
      <>
        {timeSlot}
      </>
    )
  }
}

export default withRouter(Time);