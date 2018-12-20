import React from 'react';
import SlideShow from './slideshow';
import Details from './details';

class CarShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const carId = this.props.match.params.id;
    this.props.fetchCar(carId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id != prevProps.match.params.id) {
      const nextId = this.props.match.params.id;
      this.props.fetchCar(nextId);
    }
    window.scrollTo(0, 0);
  }

  handleDelete(e) {
    e.preventDefault(e);
    this.props.deleteCar(this.props.car.id).then(() => this.props.history.push('/'));
  }

  render() {
    if (this.props.car === undefined) return null;
    return (
      <div className="car-show-container">
        <div className='img-container'>
          <SlideShow photo={this.props.car}/>
        </div>
        <div className="details">
          <Details details={this.props.car} remove={this.handleDelete} currentUser={this.props.currentUserId}/>
        </div>
      </div>
    )
  }
}

export default CarShow;