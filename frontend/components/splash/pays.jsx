import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Pays extends React.Component {
  render() {
    let paysDisplay =
      <div className="pays-container">
        <div className="pay-items">
          <h3>The car that pays for itself</h3>
          <div className="pay-list-items">
            <p>
              Make a dent in your monthly car payments — on average, Flexo hosts can cover their payments by sharing their cars just nine days per month.
              </p>
            <p>
              You’re covered with up to $1 million in liability insurance, and your car is contractually protected against theft and physical damage. Or bring your own commercial rental insurance and take a bigger piece of the pie.*
              </p>
          </div>
          <div className="pays-button">
            <Link to={'/cars/create'}>
              <button>List your car</button>
            </Link>
          </div>
        </div>
      </div>

    return (
      <>
        {paysDisplay}
      </>
    )
  }
}

export default withRouter(Pays);