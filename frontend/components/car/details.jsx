import React from 'react';

const Details = ({ details }) => (
  <div className='div0'>
    <div className="div1a">
      <div className="div2">
        <div className="div3a">
          <h2>THE CAR</h2>
        </div>
        <div className="div3b">
          <div className="div4">
            <div className='div5a'>
              <h1>
                <span className="owner-name">Owner's name</span>
                <br/>
                <span>
                  <span className="make-model"> {details.make} {details.model} </span>
                  <span className="year"> {details.year} </span>
                </span>
              </h1>
            </div>
            <div className='div5b'>
              {details.mpg}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='div1b'>
      Side bar
    </div>
  </div>
);

export default Details;