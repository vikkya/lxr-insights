import React, { Component } from 'react';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Auth0 React Login</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <button className="btn btn-primary" onClick={this.goTo.bind(this, 'dashboard')}>Dashboard</button>
              </li>
              <li>
                {
                  !isAuthenticated() && (
                    <button className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
                  )
                }
                {
                  isAuthenticated() && (
                    <button className="btn btn-primary" onClick={this.logout.bind(this)}>Log Out</button>
                  )
                }
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
