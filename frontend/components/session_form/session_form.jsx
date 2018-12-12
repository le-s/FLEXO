import React from 'react';

class SessionForm extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to FLEXO!
          {this.props.formType}
          {this.props.navLink}

          <ul>
            {this.renderErrors()}
          </ul>

          <label>Email
            <input type="email" value={this.state.email}/>
          </label>

          <label>Password
            <input type="password" value={this.state.password}/>
          </label>

          <input type="submit" value={this.state.formType}/>
        </form>


      </div>
    )
  }
}