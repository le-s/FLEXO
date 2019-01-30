import React from 'react';
import {withRouter} from 'react-router-dom';

class Porsche extends React.Component {
  render() {
    let porscheDisplay = 
      <div className="porsche-container">
        <div className="porsche-info">
          <h5>Driving at it finest</h5>
          <h3>Discover the Persche Host Program</h3>
          <p>
            Flexo and Persche are proud to introduce the Persche Host Program, a pilot program in San Francisco and Los Angeles that combines curated Persche vehicles with top Flexo hosts to give you the complete Persche experience.
          </p>
          <a href="">Explore the program</a>
        </div>
      </div>
    
    return (
      <>
        {porscheDisplay}
      </>
    )
  }
}

export default withRouter(Porsche);