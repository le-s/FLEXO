import React from 'react';
import {withRouter} from 'react-router-dom';

class Go extends React.Component {
  render() {
    let goDisplay = 
    <div className="go-container">
      <div className="go-image"></div>
      <div className="go-info">
        <h3>Book, unlock, and go!</h3>
        <p>Unlock the next level of car sharing convenience with Turo Go – find, book, and unlock cars on demand, right from the Turo app.</p>
        <div className="learn-margin">
          <a href="">Learn more</a>
        </div>
      </div>
    </div>

    return (
      <>
        {goDisplay}
      </>
    )
  }
}

export default withRouter(Go)