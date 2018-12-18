import React from 'react';

const Icon = ({details}) => {
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
        <div className='single-feature'>Automatic Transmission</div>
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
  )
}

export default Icon;