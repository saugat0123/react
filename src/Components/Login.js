import { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    state = {
        email : "",
        password: "",
        login:false,
    }

    changeHandle = (e) =>{
        this.setState({ 
            [e.target.name] : e.target.value
        })
    }
    
    submitUser = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/login', this.state)
        .then((response) => {
            console.log(response)
            this.setState({
                login : true
            })
          //  localStorage.setItem('token', response.data.token);
          localStorage.setItem('token', response.data.token)
         
        })

        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.login===true){
            return <Redirect to='/home' />
        }
        if(localStorage.getItem('token')){
            return <Redirect to='/home' />
        }
        return (
            <div class="containerl">
          <div class="forms-container">
            <div class="signin-signup">
 
              <form action="#" class="sign-in-form">
                <h2 class="title">Sign In</h2>
 
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandle}/>
                </div>
 
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandle}/>
                </div>
 
                <input type="submit" onClick={this.submitUser} value="Login" class="btn solid" />
 
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#/" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#/" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#/" class="social-icon">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#/" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
             
            </div>
          </div>
    
          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid!
                </p>
                <button class="btn transparent" id="sign-up-btn">
                 <a href="/register"> Sign up</a>
                </button>
              </div>
              <img src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/register.svg" class="image" alt="a" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
                <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/register.svg" class="image" alt="a" />
            </div>
          </div>
        </div>
        )
    }
}

export default Login;