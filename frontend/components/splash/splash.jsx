import React from "react";
import { withRouter, Route, Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    let splash = <div className="splash">
        <div className='main_splash_container'>
          <h1 className='main-text'>Way better than a rental car</h1>
          <h2 className='sub-text'>Book unforgettable cars from local hosts around the world</h2>
        </div>
      </div>;


    
    return (
      <div>
        {splash}
        <div className='footer'>
          <ul>
            <h1>github</h1>
            <h1>linkedin</h1>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);