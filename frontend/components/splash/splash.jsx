import React from "react";
import { withRouter, Route, Link } from 'react-router-dom';
import Counter from './counter';
import Porsche from './porsche';
import Go from './go';
import Tile from './tile';
import Pays from './pays';
import SplashCars from './splash_cars_container';
import SearchBar from '../search/search_bar';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
    this.date = {
      currentDate: new Date()
    };
  }


  // getDate() {
  //   let dd = this.date.currentDate.getDate();
  //   let mm = this.date.currentDate.getMonth();
  //   let yyyy = this.date.currentDate.getFullYear();

  //   if (dd < 10) {
  //     dd = '0' + dd;
  //   }

  //   if (mm < 10) {
  //     mm = "0" + mm;
  //   }

  //   this.setState({ currentDate: mm + "/" + dd + "/" + yyyy });
  // }

  handleDayClick(day, {selected}) {
    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({selectedDay: day});
  }

  render() {
    let splash = <div className="splash">
        <div className="main_splash_container">
          <h1 className="main-text">Way better than a stock car</h1>
          <h2 className="sub-text">
            Book extraordinary cars from local enthusiasts around the world
          </h2>
        </div>
        <SearchBar />
        <div className="social-container">
          <div className="github">
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
        <SplashCars/>
        <Counter/>
        <Porsche/>
        <Go/>
        <Tile/>
        <Pays/>
      </div>
    )
  }
}

export default withRouter(Splash);