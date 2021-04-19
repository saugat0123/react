  import React, { Component } from "react";
  import axios from 'axios';
  import { Redirect } from 'react-router-dom';

  class Login extends Component {
    state = {
      email: "",
      password: "",
      loginCheck: false
    }

    changeHandle = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submitUser = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/login', this.state)
        .then((response) => {
          console.log(response)
          this.setState({
            loginCheck: true
          })
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userType', response.data.data.userType)
          localStorage.setItem('_id', response.data.data._id)
          localStorage.setItem('firstName', response.data.data.firstName)
          window.location.href='/'
        })

        .catch((err) => {
          console.log(err.response)
        })
    }
    render() {
      if (this.state.loginCheck === true) {
        return <Redirect to='/' />
      }
      if (localStorage.getItem('token')) {
        return <Redirect to='/' />
      }
      return (
        <div>
          <form className="col-sm-5 offset-sm-3">
            <h3>Sign In</h3>

            <div class="mb-2">
              <label for="email" class="form-label">Email</label>
              <input type="text" class="form-control" id="email" name="email" value={this.state.email} onChange={this.changeHandle} />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" value={this.state.password} onChange={this.changeHandle} />
            </div>

            <div className="form-group" class="mb-3">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={this.submitUser}>Submit</button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>

      )
    }
  }

  export default Login;