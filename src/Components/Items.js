import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';

class Items extends Component {

    state = {
        items: []
        // config:{
        //     headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        // }
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

    // Deleteitem = (pid) => {
    //     console.log(pid)
    //     //axios.get("http://localhost:3001/item/all")  
    // }

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.items.map((item) => {
                            return (

                                <div class="col-lg-4">
                                    <div class="card h-80">
                                        <img class="card-img-top" src={"http://localhost:3001/" + item.itemImage} alt="" style={{ height: "300px", width: "200px", marginLeft: "auto", marginRight: "auto" }} />
                                        <div class="card-body">
                                            <p>Name: {item.itemName}</p>
                                            <p>Price: {item.itemPrice}</p>
                                            <p>Type: {item.itemType}</p>
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