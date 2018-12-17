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
    <div className="div6">
      <span className="aux-icon" />
      <div className='features'>Audio Input</div>
    </div>
  }

  if (details.bluetooth === true) {
    aux = 
    <div className="div6">
      <span className="bluetooth-icon" />
      <div className='features'>Bluetooth</div>
    </div>
  }

  if (details.automaticTrans === true) {
    transmission = 
    <div className="div6">
      <span className="auto-icon" />
      <div className='features'>Automatic Transmission</div>
    </div>
  }

  if (details.automaticTrans === false) {
    transmission = 
    <div className="div6">
      <span className="manual-icon" />
      <div className='features'>Manual Transmission</div>
    </div>
  }

  if (details.backupCamera === true) {
    backup = 
    <div className="div6">
      <span className="backup-icon" />
      <div className='features'>Backup Camera</div>
    </div>
  }

  if (details.gps === true) {
    gps = 
    <div className="div6">
      <span className="gps-icon" />
      <div className='features'>GPS</div>
    </div>
  }

  if (details.heatedSeats === true) {
    heated = 
    <div className="div6">
      <span className="heated-icon" />
      <div className='features'>Heated seats</div>
    </div>
  }

  if (details.usbPorts === true) {
    usb = 
    <div className="div6">
      <span className="usb-icon" />
      <div className='features'>USB Input</div>
    </div>
  }

  return (
  <div className="div0">
    <div className="div1a">
      <div className="div2">
        <div className="div3a">
          <h2>THE CAR</h2>
        </div>
        <div className="div3b">
          <div className="div4">
            <div className="div5a">
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
            <div className="div5b">
              <div className="div6">
                <span className="mpg-icon" />
                <div className='features'>{details.mpg} mpg</div>
              </div>
              <div className="div6">
                <span className="gas-icon" />
                <div className='features'>{details.fuelType}</div>
              </div>
              <div className="div6">
                <span className="door-icon" />
                <div className='features'>{details.numDoors} doors</div>
              </div>
              <div className="div6">
                <span className="seat-icon" />
                <div className='features'>{details.numSeats} seats</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="div3a">
            <h2>DESCRIPTION</h2>
          </div>
          <div className="div3ba">
            <h2>{details.description}</h2>
          </div>
        </div>
        <div className="div2">
          <div className="div3a">
            <h2>FEATURES</h2>
          </div>
          <div className="div3ba">
            <div className="div5b">
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
    <div className="div1b">Side bar</div>
  </div>
  )};

export default Details;