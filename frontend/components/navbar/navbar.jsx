import React from 'react';
import {withRouter, Route, Link} from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/login_form_container';

class NavBar extends React.Component {
  
  render() {
    let userDisplay = this.props.currentUser ? (
      <div>
        Welcome, {this.props.currentUser.firstName}
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div>
        {<Link to='/signup'>Sign up</Link>}
        {<Link to='/login'>Login</Link>}
      </div>
    );

    return (
      <header>
        <div>
          {userDisplay}
        </div>
      </header>
    )
  }
}

export default withRouter(NavBar);

// const userDisplay = () => (
//   <header>
//     Welcome, {this.props.currentUser.firstName}
//     <button onClick={this.props.logout}>Logout</button>
//   </header>
// );

// const guestDisplay = () => (
//   <div>
//     {<Link to='/signup'>Sign up</Link>}
//     {<Link to='/login'>Login</Link>}
//   </div>
// );

// return this.props.currentUserId ? userDisplay() : guestDisplay()