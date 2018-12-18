import React from 'react';

const Details = ({ details }) => {
  let aux;
  let bluetooth;
  let transmission;
  let backup;
  let gps;
  let heated;
  let usb;

  if (details.auxiliaryInput === true) {
    aux = 
    <div className="features">
      <span className="aux-icon" />
      <div className='single-feature'>Audio Input</div>
    </div>
  }

  if (details.bluetooth === true) {
    aux = 
    <div className="features">
      <span className="bluetooth-icon" />
      <div className='single-feature'>Bluetooth</div>
    </div>
  }

  if (details.automaticTrans === true) {
    transmission = 
    <div className="features">
      <span className="auto-icon" />
      <div className='single-feature'>Auto Transmission</div>
    </div>
  }

  if (details.automaticTrans === false) {
    transmission = 
    <div className="features">
      <span className="manual-icon" />
      <div className='single-feature'>Manual Transmission</div>
    </div>
  }

  if (details.backupCamera === true) {
    backup = 
    <div className="features">
      <span className="backup-icon" />
      <div className='single-feature'>Backup Camera</div>
    </div>
  }

  if (details.gps === true) {
    gps = 
    <div className="features">
      <span className="gps-icon" />
      <div className='single-feature'>GPS</div>
    </div>
  }

  if (details.heatedSeats === true) {
    heated = 
    <div className="features">
      <span className="heated-icon" />
      <div className='single-feature'>Heated seats</div>
    </div>
  }

  if (details.usbPorts === true) {
    usb = 
    <div className="features">
      <span className="usb-icon" />
      <div className='single-feature'>USB Input</div>
    </div>
  }

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
          <div className="more-features">
            <div className="all-features">
              {aux}
              {bluetooth}
              {transmission}
              {backup}
              {gps}
              {heated}
              {usb}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="side">
      <div className="reservation-info">
        <div className="cost">
          <div className="dollar-price">
            <div className="dollar">
              $
            </div>
            <div className="price">
              {details.price}
            </div>
          </div>
          <span className="per-day">per day</span>
        </div>
        <div className="div1">
          <div className="div2a">
            Distance Included
          </div>
          <div className="div2">
            <div>Day</div>
            <div>200 mi</div>
          </div>
          <div className="div2">
            Week
          </div>
          <div className="div2">
            Month
          </div>
        </div>
      </div>
    </div>

  </div>
  )};

export default Details;