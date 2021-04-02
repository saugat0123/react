import { Component , state, changeHandle, submitUser, e} from "react";
import axios from 'axios';

class Register extends Component{
    state = {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email : "",
        password: ""
    }

    changeHandle = (e) =>{
        this.setState({ 
            [e.target.name] : e.target.value
        })
    }
    
    submitUser = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/register', this.state)
        .then((response) => {
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    render(){
        
        return (
            <div>
                <form>
                    <div class = "labelSignup">
                        <h2>Sign Up</h2>
                    </div>

                    <div class="mb-2">
                        <label for="fname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fname" name="firstName" value={this.state.firstName} onChange={this.changeHandle}/>
                    </div>

                    <div class="mb-2">
                        <label for="lname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lname" name="lastName" value={this.state.lastName} onChange={this.changeHandle}/>
                    </div>

                    <div class="mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" name="email" value={this.state.email} onChange={this.changeHandle}/>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name = "password" value={this.state.password} onChange={this.changeHandle} />
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="password" class="form-control" id="address" name = "address" value={this.state.address} onChange={this.changeHandle}/>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="password" class="form-control" id="phone" name = "phone" value={this.state.phone} onChange={this.changeHandle}/>
                    </div>
            
                    <button type="submit" class="btn btn-primary" onClick={this.submitUser}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Register;