import React from 'react';
import {Link} from 'react-router-dom';

class CarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCars();
    window.scrollTo(0,0);
  }

  render() {
    return (
      <>
        <div className="filter-bar">
          <button>Sort by</button>
          <button>Book instantly</button>
          <button>Price</button>
          <button>Delivery</button>
          <button>More Filters</button>
        </div>
        <div className="index-page-container">
          <div className="car-index-container">
            {this.props.cars.map(car => 
            <div className="car-card-container">
              <div key={car.id} className="car-container">
                <Link to={`/cars/${car.id}`} className="car-hover">
                  <div className="car-index-image">
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
        </div>
      </>
    )
  }
}

export default CarIndex;