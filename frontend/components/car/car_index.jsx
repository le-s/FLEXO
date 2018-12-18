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
          <div key={car.id} className="divi1">
            <Link to={`/cars/${car.id}`}>

              <div className="divi2">
                <img src={car.photoUrl} />
              </div>
              <div>
                {car.make}
                {car.model}
                {car.year}
              </div>
            </Link>
          </div>)}
        </div>
      </>
    )
  }
}

export default CarIndex;