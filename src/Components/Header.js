import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Header extends Component{
  state = {
    user: {},
    config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
   
  }
  componentDidMount() {
    axios.get("http://localhost:3001/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        this.setState({
          user: response.data.data
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
    render(){
        return(
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
              <span class="sr-only">(current)</span>
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