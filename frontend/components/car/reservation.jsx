import React from 'react';

const ReservationInfo = ({details}) => {
  return <div className="side">
      <div className="reservation-info">
        <div className="cost">
          <div className="dollar-price">
            <div className="dollar">$</div>
            <div className="price">{details.price}</div>
          </div>
          <span className="per-day">per day</span>
        </div>
        <div className="div1">
          <div className="div2a">Distance Included</div>
          <div className="div2">
            <div>Day</div>
            <div>200 mi</div>
          </div>
          <div className="div2">
            <div>Week</div>
            <div>1000 mi</div>
          </div>
          <div className="div2">
            <div>Month</div>
            <div>1500 mi</div>
          </div>
        </div>
        <div className="div1">
          <div className="div2a">Insurance Provided VIA</div>
          <div className="insurance">Liberty Mututal</div>
        </div>
      </div>
      <div className="div1b">
        <div className="owner-details-container">
          <div className="owner-details">
            <div className="owner-body">
              <div className="owner-details">
                <div className="corgi" />
                <div className="name-pic">
                  <div className="div2a">Owned by</div>
                  <div className="right-side-owner-name">
                    {details.firstName}
                  </div>
                  <div>
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                  </div>
                </div>
              </div>
              <div className="sidebar-response">
                <div className="div2">
                  <div>Response rate</div>
                  <div>99 %</div>
                </div>
                <div className="div2">
                  <div>Response time</div>
                  <div>20 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-price">
          <div className="favorite-btn">
            <div className="empty-heart"></div>
            <p>Add to favorites</p>
          </div>
        </div>
        <div className="report">
          Report listing
        </div>
      </div>
    </div>;
}

export default ReservationInfo;