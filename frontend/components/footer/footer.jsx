import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    let footerDisplay = <div className="footer">
        <div className="footer-container">
          <div className="footer-info-container">
            <div className="items-container">
              <section>
                <h4>Get started</h4>
                <ul className="footer-items">
                  <li>
                    <a href="">Get the iPhone app</a>
                  </li>
                  <li>
                    <a href="">Get the Android app</a>
                  </li>
                  <li>
                    <a href="">Rent a car</a>
                  </li>
                  <li>
                    <a href="">Make money with your car</a>
                  </li>
                  <li>
                    <a href="">Carculator</a>
                  </li>
                  <li>
                    <a href="">Turo for business</a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="items-container">
              <section>
                <h4>Learn more</h4>
                <ul className="footer-items">
                  <li>
                    <a href="">How Turo works</a>
                  </li>
                  <li>
                    <a href="">Policies</a>
                  </li>
                  <li>
                    <a href="">Trust & safety</a>
                  </li>
                  <li>
                    <a href="">Owner tools</a>
                  </li>
                  <li>
                    <a href="">Traveler FAQs</a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="items-container">
              <section>
                <h4>Top cities</h4>
                <ul className="cities-section footer-items">
                  <div>
                    <li>
                      <a href="">Atlanta</a>
                    </li>
                    <li>
                      <a href="">Boston</a>
                    </li>
                    <li>
                      <a href="">Chicago</a>
                    </li>
                    <li>
                      <a href="">Denver</a>
                    </li>
                    <li>
                      <a href="">Honolulu</a>
                    </li>
                    <li>
                      <a href="">Houston</a>
                    </li>
                    <li>
                      <a href="">Los Angeles</a>
                    </li>
                  </div>
                  <div className="cities-margin">
                    <li>
                      <a href="">Montreal</a>
                    </li>
                    <li>
                      <a href="">San Diego</a>
                    </li>
                    <li>
                      <a href="">San Francisco</a>
                    </li>
                    <li>
                      <a href="">Seattle</a>
                    </li>
                    <li>
                      <a href="">Toronto</a>
                    </li>
                    <li>
                      <a href="">Washington, DC</a>
                    </li>
                    <li>
                      <a href="">View airports</a>
                    </li>
                  </div>
                </ul>
              </section>
            </div>
            <div className="items-container">
              <section>
                <h4>Talk to us</h4>
                <div className="social-media footer-items">
                  <a href="">
                    <i className="fab fa-facebook-f social-media-size"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter social-media-size"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram social-media-size"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-youtube social-media-size"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-pinterest-p social-media-size"></i>
                  </a>
                </div>
                <ul className="footer-items">
                  <li>
                    <a href="">Read our blog</a>
                  </li>
                  <li>
                    <a href="">Contact customer support</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="about-info-container">
            <div className="about">
              <ul className="footer-items about-items">
                <li>©2019 Turo</li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">OpenRoad</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="language">
              <a href="">English (USA)</a>
            </div>
          </div>
        </div>
      </div>;

    return (
      <>
        {footerDisplay}
      </>
    )
  }
}

export default withRouter(Footer);