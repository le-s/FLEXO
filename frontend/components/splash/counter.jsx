import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class Counter extends React.Component {
  render() {
    let counterDisplay = <div className="counter-container">
        <h3>Skip the rental counter</h3>
        <div className="counter-grid">
          <div className="counter-grid-item">
            <h5>The car you want</h5>
            <p>
              Choose from over 800 unique makes and models, from affordable
              daily drivers to rare specialty cars.
            </p>
          </div>
          <div className="counter-grid-item">
            <h5>Where you want it</h5>
            <p>
              Pick up the car or get it delivered, wherever you need it, up
              to 35% less than traditional agencies.
            </p>
          </div>
        </div>
        <div className="count-button-container">
          <Link to={"/cars"}>
            <button className="counter-button">Book the perfect car</button>
          </Link>
        </div>
      </div>;

    return (
      <>
        {counterDisplay}
      </>
    )
  }
}

export default withRouter(Counter);