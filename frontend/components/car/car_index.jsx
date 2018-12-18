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
    return(
      <div>
        {this.props.cars.map(car => (
          <div>
            <img src={car.photoUrl}/>
            {car.make}
            {car.model}
            {car.year}
          </div>
        ))}
      </div>
    )
  }
}

export default CarIndex;