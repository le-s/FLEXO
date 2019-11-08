import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import moment from 'moment';
import { formatDate } from 'react-day-picker/moment'

class RentalIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }


  handleDelete(e) {
    e.preventDefault(e);
    this.props.deleteRental(this.props.rental.id).then(() => {
      window.location.reload(true);
    });
  }

  render() {
    return (
      <>
        <div className="car-container">
          <Link to={`/cars/${this.props.rental.carId}`} className="car-hover">
            <div className="rental-index-image">
              <img src={this.props.rental.photoUrl} />
            </div>
            <div className="ymm-dd">
              <div className="rental-details">
                <span className="ymm">
                  {this.props.rental.year} {this.props.rental.make} {this.props.rental.model}
                </span>
                <span className="reserve-return">
                  {formatDate(this.props.rental.reserveDate)} - {formatDate(this.props.rental.returnDate)}
                </span>
              </div>
            </div>
          </Link>
          <div className="rental-button-container">
            <button className="rental-cancel" onClick={this.handleDelete}>
              Cancel Rental
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(RentalIndexItem);