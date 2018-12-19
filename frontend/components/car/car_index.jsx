import React from 'react';
import {Link} from 'react-router-dom';

class CarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    return (
      <>
        <div className="divi0">
          {this.props.cars.map(car => 
          <div className="div1a">
            <div key={car.id} className="divi1">
              <Link to={`/cars/${car.id}`}>

                <div className="divi2">
                  <img src={car.photoUrl} />
                </div>
                <div>
                  <div className="card-price"></div>
                  <div className="year-make-model">
                    <div className="make-model">
                      {car.make}
                      {car.model}
                    </div>
                    <div className="year-card">
                      {car.year}
                    </div>
                  </div>
                  <div>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                  </div>
                </div>
              </Link>
            </div>
          </div>)}
        </div>
      </>
    )
  }
}

export default CarIndex;