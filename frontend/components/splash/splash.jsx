import React from "react";
import { withRouter, Route, Link } from 'react-router-dom';
import Counter from './counter';
import Porsche from './porsche';
import Go from './go';
import Pays from './pays';

class Splash extends React.Component {

  render() {
    let splash = <div className="splash">
        <div className="main_splash_container">
          <h1 className="main-text">Way better than a stock car</h1>
          <h2 className="sub-text">
            Book extraordinary cars from local enthusiasts around the world
          </h2>
        </div>
        <div className="search-container">
          <div>
            <input type="text" placeholder="Enter city, airport, or address" className="input-search-sizing"/>
          </div>
          <Link to={'/cars'}>
            <button className="button-search" />
          </Link>
        </div>
        <div className="social-container">
          <div className='github'>
            <a href="https://github.com/le-s">Github</a>
          </div>
          <div className="linkedin">
            <div className="linkedin-align">
              <a href="https://www.linkedin.com/in/sle94/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>;

    return (
      <div className="splash-page-container">
        {splash}
        <Counter/>
        <Porsche/>
        <Go/>
        <Pays/>
      </div>
    )
  }
}

export default withRouter(Splash);