import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

class Header extends Component {

  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('_id')
    localStorage.removeItem('userType')
    localStorage.removeItem('firstName')
    window.location.href = '/login'

  }

  render() {

    if (localStorage.getItem('token') && localStorage.getItem('userType') == 'Admin') {
      var menu =
        <>
          <Link to="/">Home</Link> |
          <Link to='/add/item'>Add Food</Link> |
          <Link to='/foods'>View Foods</Link> |
          <Link to='/logout' onClick={this.logout}>Log Out</Link>
        </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') == 'Customer') {
      var menu =
        <>
          <Link to="/">Home</Link> |
          <Link to='/foods'> Foods</Link> |
          <Link to='/cart'> Cart</Link> |
          <Link to='/profile'>{localStorage.getItem('firstName')}</Link> |

          <Link to='/logout' onClick={this.logout}>Log Out</Link>
        </>
    }
    else {
      var menu =
        <>
          <Link to="/">Home</Link> |
          <Link to='/foods'>Foods</Link> |
          <Link to="/register">Register</Link>  |
          <Link to='/login'>Login</Link> |
        </>
    }

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="header">
        <div className="container">
          <a className="navbar-brand" href="/">Royal Bhatti</a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {menu}
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Header