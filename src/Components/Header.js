import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

class Header extends Component {

  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href = '/login'

  }

  render() {

    if (localStorage.getItem('token') && localStorage.getItem('userType') == 'Admin') {
      var menu =
        <>
          <Link to="/">Home</Link> |
          <Link to='/add/item'>Add Food</Link> |
          <Link to='/item/all'>View Foods</Link> |
          <Link to='/logout' onClick={this.logout}>Log Out</Link>
        </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') == 'Customer') {
      var menu =
        <>
          <Link to='/item/all'>View Foods</Link> |
          <Link to='/me'>Profile</Link> |
          <Link to="/">Home</Link> |
          <Link to='/logout' onClick={this.logout}>Log Out</Link>
        </>
    }
    else {
      var menu =
        <>
          <Link to="/">Home</Link> |
            <Link to="/register">Register</Link>  |
            <Link to='/login'>Login</Link> |
            <Link to='/item/all'>View Foods</Link> |
            </>
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Royal Bhatti</a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
              {/* <span className="sr-only">(current)</span> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Foods
            </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/foods">All Foods</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              {/* <li classNameName="nav-item"><a href="/Signup" classNameName="nav-link btnp" onClick={e => {
                                    e.preventDefault();
                                    // <Nav.Link title={this.state.user.firstName} href="/home">{this.state.user.firstName}</Nav.Link>
                                    if(window.confirm('Are you sure you want to log out?')) {
                                    localStorage.removeItem('token')
                                    window.location.assign('/home')
                                    }}}><h6>Logout</h6></a></li> */}
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Header