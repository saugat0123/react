import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Items extends Component {

    state = {
        items: [],
        config:{
            headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        },
        id:localStorage.getItem('_id')
    }

    componentDidMount() {
        axios.get("http://localhost:3001/item/all")
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    deleteMyItem=(proId)=>{
        axios.delete('http://localhost:3001/delete/item/'+proId, this.state.config)
        .then((response)=>{
            console.log(response)
            alert("Delete Item??")
            window.location.href='/foods'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    addToCart =(pid)=>{

        axios.post('http://localhost:3001/cart/'+pid,this.state.id,this.state.config)
        .then((response)=>{
        
        alert("Food added to cart")
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.items.map((item) => {
                            return (

                                <div class="col-lg-3">
                                    <div class="card h-100">
                                        <img class="card-img-top" src={"http://localhost:3001/" + item.itemImage} alt="" />
                                        <div class="card-body">
                                            <h4 class="card-title">{item.itemName}</h4>
                                            <h4 class="card-title">{item.itemPrice}</h4>
                                            <h4 class="card-title">{item.itemType}</h4>
                                        </div>
                                        <div class="card-footer">
                                        <p><button className="addtocartbutton" onClick={this.addToCart.bind(this,item._id)}>Add To Cart</button></p>
                                            <p><button onClick={this.deleteMyItem.bind(this,item._id)}>Delete</button></p>
                                            <p><button><Link to={'/update/food/'+item._id}>Update</Link></button></p>
                                        </div>
                                    </div>
                                </div>
                                

                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default Items