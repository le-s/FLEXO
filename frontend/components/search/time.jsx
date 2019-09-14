import React from 'react';
import { withRouter } from 'react-router-dom';

class Time extends React.Component {
  render() {
    let timeSlot = 
      <select name="time" className="splash-time-dropdown" defaultValue="10:00">
      <option value='00:00'>Midnight</option>
      <option value='00:30'>12:30 AM</option>
      <option value='01:00'>1:00 AM</option>
      <option value='01:30'>1:30 AM</option>
      <option value='02:00'>2:00 AM</option>
      <option value='02:30'>2:30 AM</option>
      <option value='03:00'>3:00 AM</option>
      <option value='03:30'>3:30 AM</option>
      <option value='04:00'>4:00 AM</option>
      <option value='04:30'>4:30 AM</option>
      <option value='05:00'>5:00 AM</option>
      <option value='05:30'>5:30 AM</option>
      <option value='06:00'>6:00 AM</option>
      <option value='06:30'>6:30 AM</option>
      <option value='07:00'>7:00 AM</option>
      <option value='07:30'>7:30 AM</option>
      <option value='08:00'>8:00 AM</option>
      <option value='08:30'>8:30 AM</option>
      <option value='09:00'>9:00 AM</option>
      <option value='09:30'>9:30 AM</option>
      <option value='10:00'>10:00 AM</option>
      <option value='10:30'>10:30 AM</option>
      <option value='11:00'>11:00 AM</option>
      <option value='11:30'>11:30 AM</option>
      <option value='12:00'>Noon</option>
      <option value='12:30'>12:30 PM</option>
      <option value='13:00'>1:00 PM</option>
      <option value='13:30'>1:30 PM</option>
      <option value='14:00'>2:00 PM</option>
      <option value='14:30'>2:30 PM</option>
      <option value='15:00'>3:00 PM</option>
      <option value='15:30'>3:30 PM</option>
      <option value='16:00'>4:00 PM</option>
      <option value='16:30'>4:30 PM</option>
      <option value='17:00'>5:00 PM</option>
      <option value='17:30'>5:30 PM</option>
      <option value='18:00'>6:00 PM</option>
      <option value='18:30'>6:30 PM</option>
      <option value='19:00'>7:00 PM</option>
      <option value='19:30'>7:30 PM</option>
      <option value='20:00'>8:00 PM</option>
      <option value='20:30'>8:30 PM</option>
      <option value='21:00'>9:00 PM</option>
      <option value='21:30'>9:30 PM</option>
      <option value='22:00'>10:00 PM</option>
      <option value='22:30'>10:30 PM</option>
      <option value='23:00'>11:00 PM</option>
      <option value='23:30'>11:30 PM</option>
    </select>

    return (
      <>
        {timeSlot}
      </>
    )
  }
}

export default withRouter(Time);