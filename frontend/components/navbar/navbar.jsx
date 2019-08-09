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
    $('body').on("click", this.removeDropDown);
  }

  addDropDown(event) {
    // event.stopPropagation();
    event.preventDefault();
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
    setTimeout(() => this.setState({ dropDown: false }), 1000);
  }

  render() {
    // const addDropdown = this.addDropDown;
    let userDisplay = this.props.currentUser ? (
        <ul className='right-nav'>
          <Link to={'/cars/create'}>
            <button className='nav-item'>List your car</button>
          </Link>
          <div className='dropdown'>
              <div className='profile' onClick={this.addDropDown}/>
              <div 
                className={this.state.dropDown ? 'dropdown-content active' : 'dropdown-content'}
              >
                <button className='nav-button' onClick={this.props.logout}>Logout</button>
              </div>
          </div>
        </ul>
    ) : (
      <div>
        <ul className='right-nav'>
          <button className='nav-item' onClick={() => this.props.openModal('signup')}>List your car</button>
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