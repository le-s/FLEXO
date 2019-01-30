import React from 'react';
import {withRouter} from 'react-router-dom';

class Tile extends React.Component {
  render() {
    let tileDisplay = 
    <div className="tile-container">
      <div className="bimmer-container">
        <h5>Ask the</h5>
        <h3>Carculator</h3>
        <p>Find out how much your car could earn for you.</p>
        <div className="tile-button">
          <a href="">Get an estimate</a>
        </div>
      </div>
      <div className="tile-map-container">
        <h5>Read up on</h5>
        <h3>That good-good</h3>
        <p>Peruse cool cars and good stories on the Flexo blog.</p>
        <div className="tile-button">
          <a href="">Check it out</a>
        </div>
      </div>
    </div>

    return (
      <>
        {tileDisplay}
      </>
    )
  }
}

export default withRouter(Tile)