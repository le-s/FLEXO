import React from 'react';
import {withRouter, Route, Link} from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/login_form_container';
import openModal from '../../actions/modal_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    }
    this.addDropDown = this.addDropDown.bind(this);
    this.removeDropDown = this.removeDropDown.bind(this);
    this.removeDropDownDelayed = this.removeDropDownDelayed.bind(this);
  }

  addDropDown() {
    this.setState({
      dropDown: true
    });
  }

  removeDropDown() {
    this.setState({
      dropDown: false
    });
  }

  removeDropDownDelayed() {
    setTimeout(() => this.setState({ dropDown: false }), 1000)
  }

  render() {
    const addDropdown = this.addDropDown;
    let userDisplay = this.props.currentUser ? (
        <ul className='right-nav'>
          <button className='nav-item'>List your car</button>
          <div className='dropdown' onMouseEnter={this.addDropDown} onMouseLeave={this.removeDropDownDelayed}>
              <div className='profile'/>
              <div 
                className={this.state.dropDown ? 'dropdown-content active' : 'dropdown-content'}
                
                onMouseEnter={this.addDropDown}
              >
                <button className='nav-button' onClick={this.props.logout}>Logout</button>
              </div>
          </div>
        </ul>
    ) : (
      <div>
        <ul className='right-nav'>
          <button className='nav-item'>List your car</button>
          <button className='nav-button' onClick={() => this.props.openModal('login')}>Login</button>
          <button className='nav-button' onClick={() => this.props.openModal('signup')}>Signup</button>
        </ul>
      </div>
    );

    return (
        <div>
          {userDisplay}
        </div>
    )
  }
}

export default withRouter(NavBar);