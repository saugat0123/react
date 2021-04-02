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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">Royal Bhatti</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home
              {/* <span class="sr-only">(current)</span> */}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Foods
            </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Booking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              {/* <li className="nav-item"><a href="/Signup" className="nav-link btnp" onClick={e => {
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