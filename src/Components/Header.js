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
          <Link to="/">Home &nbsp;&nbsp;</Link>
          <Link to='/add/item'>Add Food&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Link to='/foods'>View Foods&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Link to='/logout' onClick={this.logout}>Log Out</Link>
        </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') == 'Customer') {
      var menu =
        <>
          <Link to="/">Home&nbsp;&nbsp;&nbsp;&nbsp;</Link> 
          <Link to='/foods'> Foods&nbsp;&nbsp;&nbsp;&nbsp;</Link> 
          <Link to='/cart'> Cart&nbsp;&nbsp;&nbsp;&nbsp;</Link> 
          <Link to='/profile/:id'>{localStorage.getItem('firstName')}&nbsp;&nbsp;&nbsp;&nbsp;</Link> 

          <Link to='/logout' onClick={this.logout}>Log Out</Link>
        </>
    }
    else {
      var menu =
        <>
          <Link to="/">Home&nbsp;&nbsp;&nbsp;&nbsp;</Link> 
          <Link to='/foods'>Foods&nbsp;&nbsp;&nbsp;&nbsp;</Link> 
          <Link to="/register">Register&nbsp;&nbsp;&nbsp;&nbsp;</Link>  
          <Link to='/login'>Login&nbsp;&nbsp;&nbsp;&nbsp;</Link> 
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