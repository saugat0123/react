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
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_name">Product Name *</label> <input onChange={this.changeHandler} value={this.state.items.firstName} name="itemName" class="form-control" placeholder="Please enter your product name *" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Price of product *</label> <input onChange={this.changeHandler} value={this.state.itemPrice} name="itemPrice" class="form-control" placeholder="Please enter the price of product" /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_email">Product Type *</label> <input onChange={this.changeHandler} value={this.state.pdesc} name="itemType" class="form-control" placeholder="Please enter the product description *" required="required" data-error="Description is required." /> </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick={this.updatePro} value="Update Product" /> </div>
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