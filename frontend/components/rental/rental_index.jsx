import React from 'react';
import { Link } from 'react-router-dom';

import RentalIndexItem from './rental_index_item';

import moment from 'moment';
import { formatDate } from 'react-day-picker/moment'

class RentalIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loadRentals = this.loadRentals.bind(this);
  }

  componentDidMount() {
    const userId = this.props.currentUserId;
    this.props.fetchUserRentals(userId);
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
              <RentalIndexItem deleteRental={this.props.deleteRental} rental={rental}/>
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