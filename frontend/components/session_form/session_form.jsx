import React from 'react';
import { withRouter } from "react-router-dom";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formFields;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.processForm(user).then(this.props.closeModal);
  }
  
  renderErrors() {
    if (this.props.errors) {
      return this.props.errors.map(error => {
        return <li key={error}>
            {error}
          </li>;
      });
    }
  }

  render() {
    let displayForm;

    if (this.props.formType === 'login') {
      displayForm = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">X</div>

            Welcome back

            <br/>

            <label>
              Email
              <input type="text" value={this.state.email} placeholder='Email' onChange={this.update('email')}/>
            </label>

            <br/>

            <label>
              Password
              <input type="password" value={this.state.password} placeholder='Password' onChange={this.update('password')}/>
            </label>

            <input type="submit" value="Log in"/>

            <br/>

            or

            <br/>

            Don't have an account? 
            {this.renderErrors()}
          </form>
        </div>
      );
    } else {
      displayForm = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">X</div>

            Welcome to Turo

            <br/>

            <label>
              First name
              <input type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
            </label>
            
            <br/>

            <label>
              Last name
              <input type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
            </label>

            <br/>

            <label>
              Email
              <input type="email" value={this.state.email} onChange={this.update('email')}/>
            </label>

            <br/>

            <label>
              Password
              <input type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>

            <br/>

            <input type="submit" value="Sign up" />

            {this.renderErrors()}
          </form>
        </div>
      )
    }

    return (
      <div>
        {displayForm}
      </div>
    )
  }
}

export default withRouter(SessionForm);