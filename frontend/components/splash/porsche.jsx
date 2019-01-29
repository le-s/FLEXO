import React from 'react';
import {withRouter} from 'react-router-dom';

class Porsche extends React.Component {
  render() {
    let porscheDisplay = 
      <div className="porsche-container">
        <div className="porsche-info">
          <h5>Driving at it finest</h5>
          <h3>Discover the Porsche Host Program</h3>
          <p>
            Turo and Porsche are proud to introduce the Porsche Host Program, a pilot program in San Francisco and Los Angeles that combines curated Porsche vehicles with top Turo hosts to give you the complete Porsche experience.
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