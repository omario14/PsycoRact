import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom';
import AuthService from '../../../Services/auth.service';
import './nav.css';
class Nav extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    AuthService.logout();
  }

  render(){
  return (
    <div className='nabar'>
        
        <nav className="navbar navbar-expand-sm   navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapsee navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
          <div className='heading-section'> Patient</div>
          <div className="social-part">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <a className='nav-link' href='/login' onClick={this.logOut} >Logout</a>
            </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}
}

export default Nav;
