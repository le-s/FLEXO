import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    let footerDisplay = <div className="footer">
        <div className='github'>
        <a href="https://github.com/le-s">Github</a>
        </div>
        <div className="linkedin">
          <div className="linkedin-align">
            <a href="https://www.linkedin.com/in/sle94/">LinkedIn</a>
          </div>
        </div>
      </div>;

    return (
      <div>
        {footerDisplay}
      </div>
    )
  }
}

export default withRouter(Footer);