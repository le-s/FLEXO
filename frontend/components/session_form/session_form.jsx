import React from 'react';
import { withRouter } from "react-router-dom";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formFields;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemoLogin(e) {
    e.preventDefault(e);
    this.props.processForm({
      email: 'demo@email.com',
      password: 'password'
    }).then(this.props.closeModal);
  }

  render() {
    let displayForm;
    if (this.props.formType === 'login') {
      displayForm = <div>
          <div className="close" onClick={this.props.closeModal}>
            &times;
          </div>
          <form className="signlog-form has-error" onSubmit={this.handleSubmit}>

            <h1 className='header'>Welcome back</h1>

            <br />

            <label className='form-text'>
              Email
              <br/>
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.update("email")} />
            </label>

            <br />

            <label className='form-text'>
              Password
              <br/>
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.update("password")} />
            </label>

            <br/>

            <input className='submit' type="submit" value="Log in" />

            <br/>

            <div className="sign-in-or">
              or
            </div>

            <br/>

            <input className='demo' onClick={this.handleDemoLogin} type="submit" value='Demo Login' />

            <br />

            <div className='align'>
              <h3 className='sub'>
                Don't have an account?
              </h3>

              {this.props.otherForm}
            </div>
            {this.renderErrors()}
            
          </form>
        </div>;
    } else {
      displayForm = <div>
          <div className="close" onClick={this.props.closeModal}>
            &times;
          </div>
          <form className="signlog-form" onSubmit={this.handleSubmit}>

            <h1 className='header'>
              Welcome to Turo
            </h1>

            <br />

            <label className='form-text'>
              First name
              <br/>
              <input type="text" value={this.state.firstName} onChange={this.update("firstName")} />
              <h1 className='single-error'>{this.props.errors.first_name}</h1>
            </label>

            <label className='form-text'>
              Last name
              <br/>
              <input type="text" value={this.state.lastName} onChange={this.update("lastName")} />
              <h1 className='single-error'>{this.props.errors.last_name}</h1>
            </label>

            <label className='form-text'>
              Email
              <br/>
              <input type="email" value={this.state.email} onChange={this.update("email")} />
              <h1 className='single-error'>{this.props.errors.email}</h1>
            </label>

            <label className='form-text'>
              Password
              <br/>
              <input type="password" value={this.state.password} onChange={this.update("password")} />
              <h1 className='single-error'>{this.props.errors.password}</h1>
            </label>

            <br />

            <input className='submit' type="submit" value="Sign up" />

            <br/>

            <div className='align'>
              <h3 className='sub'>
                Have an account?
              </h3>

              {this.props.otherForm}
            </div>

          </form>
        </div>;
    }

    return (
      <div>
        {displayForm}
      </div>
    )
  }
}

export default withRouter(SessionForm);