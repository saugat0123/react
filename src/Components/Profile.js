import { Component } from "react";
import axios from 'axios';
import '../css/profile.css'

class Profile extends Component {

    state = {
        items: {},
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: localStorage.getItem('_id')
    }

    componentDidMount() {
        const id = localStorage.getItem('_id')
        console.log(id)
        axios.get("http://localhost:3001/me/" + id)
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <div class="row ">
                <div class="col-lg-7 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form" role="form">
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-6">

                                                <div class="profile-img">
                                                    <img src={"http://localhost:3001/" + this.state.items.photo} alt="" />
                                                    <div class="file btn btn-lg btn-primary">
                                                        Change Photo
                                                        <input type="file" name="file" />
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        <div class="mb-2">
                                            <label for="fname" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="fname" name="firstName" value={this.state.items.firstName} onChange={this.changeHandle} />
                                        </div>

                                        <div class="mb-2">
                                            <label for="lname" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="lname" name="lastName" value={this.state.items.lastName} onChange={this.changeHandle} />
                                        </div>

                                        <div class="mb-2">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="text" class="form-control" id="email" name="email" value={this.state.items.email} onChange={this.changeHandle} />
                                        </div>

                                        <div class="mb-2">
                                            <label for="address" class="form-label">Address</label>
                                            <input type="text" class="form-control" id="address" name="address" value={this.state.items.address} onChange={this.changeHandle} />
                                        </div>
                                        <div class="mb-2">
                                            <label for="phone" class="form-label">Phone</label>
                                            <input type="text" class="form-control" id="phone" name="phone" value={this.state.items.phone} onChange={this.changeHandle} />
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick={this.updatePro} value="Update" /> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile