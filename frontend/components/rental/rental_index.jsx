import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';
import { formatDate } from 'react-day-picker/moment'

class RentalIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loadRentals = this.loadRentals.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const userId = this.props.currentUserId;
    this.props.fetchUserRentals(userId);
  }

  handleDelete(e) {
    e.preventDefault(e);
    console.log(this.props);
    // this.props.deleteRental(this.props.rentals.id).then(() => {
    //   this.props.history.push('/rentals')
    // });
  }

  loadRentals() {
    if (this.props.rentals.length === 0) {
      return (
        <>
          <div className='empty-result-details'>Looks like you haven't rented any of our cool cars yet.
          </div>
        </>
      )
    } else {
      return (
        <>
          {this.props.rentals.map(rental =>
            <div key={rental.id} className="rental-card-container">
              <div className="car-container">
                <Link to={`/cars/${rental.carId}`} className="car-hover">
                  <div className="rental-index-image">
                    <img src={rental.photoUrl} />
                  </div>
                  <div className="ymm-dd">
                    <div className="rental-details">
                      <span className="ymm">
                        {rental.year} {rental.make} {rental.model}
                      </span>
                      <span className="reserve-return">
                        {formatDate(rental.reserveDate)} - {formatDate(rental.returnDate)}
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
            </div>
          )}
        </>
      )
    }
  }

  render() {
    return (
      <>
        <div className="rental-container">
          <div className="rental-header">
            Booked Rentals
          </div>
          <div className="rental-index-container">
            {this.loadRentals()}
          </div>
        </div>
      </>
    )
  }
}

export default RentalIndex;