import React, {Component} from 'react';
import './App.css';


class Navbar extends Component{
    goTo(route) {
        this.props.history.replace(`/${route}`)
      }
    
      login() {
        this.props.auth.login();
      }
    
      logout() {
        this.props.auth.logout();
      }
    
    render(){
        const { isAuthenticated } = this.props.auth;
        return(
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
              </button>
                <a className="navbar-brand"  href="/">LXR Insights</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                {/* <li className="active">
                    {/* <NavLink activeClassName="active" to="/dashboard" >Dashboard</NavLink> 
                    <a className="pointer" onClick={this.goTo.bind(this, 'dashboard')}>Home</a>
                </li> */}
                {/* <li className="active">
                    <a  href="/visits" >Visits Analysis</a>
                </li> */}
                <li className="">
                  <a href="/home1">Home</a>
                </li>
                <li className="active">
                  <a href="/summary"> Summary</a>
                </li>
                <li className="active">
                    <a  href="/customeranalysis">Customer Persona</a>
                </li>
                <li className="active">
                    <a  href="/customerdashboard">Customer Dashboard</a>
                </li>
                <li className="active">
                    <a  href="/customerjourney">Customer Journey</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="font-white">
                {
              !isAuthenticated() && (
                  <a className="pointer" onClick={this.login.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Login</a>
                  
                )
            }
            {
              isAuthenticated() && (
                <a className="pointer" onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Log Out</a>
                )
            }
                </li>
              </ul>
              </div>
            </div>
          </nav>
        )
    }
}
export default Navbar;