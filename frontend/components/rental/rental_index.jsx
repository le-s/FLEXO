import React from 'react';
import { Link } from 'react-router-dom';

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
          {
            this.props.rentals.map(rental =>
              <div key={rental.id}>
                <h1>{rental.id}</h1>
                <div className="car-index-image">
                  <img src={rental.photoUrl} />
                </div>
              </div>
            )
          }
        </>
      )
    }
  }

  render() {
    return (
      <>
        <div>
          {this.loadRentals()}
        </div>
      </>
    )
  }
}

export default RentalIndex;