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
                  <div className="per-day-card">
                    <div className="card-price">
                      ${car.price}
                    </div>
                    /day
                  </div>
                  <div className="year-make-model">
                    <span className="make-model-card">
                      {car.make} {car.model}
                    </span>
                    <span className="year-card">
                      {car.year}
                    </span>
                  </div>
                  <div className="star-card">
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