import React from "react";
import { withRouter, Route, Link } from 'react-router-dom';
import Footer from '../footer/footer'

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
      </div>;

    return (
      <div>
        {splash}
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Splash);