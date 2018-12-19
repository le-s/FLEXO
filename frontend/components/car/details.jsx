import React from 'react';
import ReservationInfo from './reservation';
import Icon from './icon';

const Details = ({ details, remove, currentUser }) => {

  return (
  <div className="detail-side">
    <div className="info">
      <div className="all-info">
        <div className="heading">
          <h2>THE CAR</h2>
        </div>
        <div className="car-detail">
          <div className="car-width">
            <div>
              <h1>
                <span className="owner-name">{details.firstName}'s</span>
                <br />
                <span>
                  <span className="make-model">
                    {details.make} {details.model}
                  </span>
                  <span className="year">  {details.year} </span>
                </span>
              </h1>
            </div>
            <div>
              <div>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
              </div>
            </div>
            <div className="all-features">
              <div className="features">
                <span className="mpg-icon" />
                <div className='single-feature'>{details.mpg} mpg</div>
              </div>
              <div className="features">
                <span className="gas-icon" />
                <div className='single-feature'>{details.fuelType}</div>
              </div>
              <div className="features">
                <span className="door-icon" />
                <div className='single-feature'>{details.numDoors} doors</div>
              </div>
              <div className="features">
                <span className="seat-icon" />
                <div className='single-feature'>{details.numSeats} seats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-info">
        <div className="heading">
          <h2>DESCRIPTION</h2>
        </div>
        <div className="description-text">
          <h2>{details.description}</h2>
        </div>
      </div>
      <div className="all-info">
        <div className="heading">
          <h2>FEATURES</h2>
        </div>
        <Icon details={details}/>
      </div>
      <div className="all-info">
        <div className="heading">
          <h2>MODS</h2>
        </div>
        <div className="description-text">
          <h2>{details.mods}</h2>
        </div>
      </div>
    </div>
    <ReservationInfo details={details} remove={remove} currentUser={currentUser}/>
  </div>
  )}

export default Details;