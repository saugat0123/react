import { Component , state, changeHandle, submitUser, e} from "react";
import axios from 'axios';

class Register extends Component{
    state = {
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
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputEmail" name="email" value={this.state.email} onChange={this.changeHandle}/>
                    </div>

                    {/* <div class="mb-3">
                        <label for="inputLastName" class="form-label">Last Name</label>
                        <input type="password" class="form-control" id="inputLastName" />
                    </div> */}

                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword" name = "password" value={this.state.password} onChange={this.changeHandle} />
                    </div>

                    {/* <div class="mb-3">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="password" class="form-control" id="inputAddress" />
                    </div>
                    <div class="mb-3">
                        <label for="inputPhone" class="form-label">Phone</label>
                        <input type="password" class="form-control" id="inputPhone" />
                    </div> */}
                    {/* <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
    
                    </div> */}
                    
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox" />
                        <label class="form-check-label" for="checkbox">I agree</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary" onClick={this.submitUser}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Register;