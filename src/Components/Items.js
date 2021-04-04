import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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

                                // <div className="col-lg-3">
                                //     <div className="card h-80">
                                //         <img className="card-img-top" src={"http://localhost:3001/" + item.itemImage} alt=""
                                //             style={
                                //                 { height: "200px", width: "220px", marginLeft: "10px"}
                                //             }
                                //         />
                                //         <div className="card-body">
                                //             <p>Name: {item.itemName}</p>
                                //             <p>Price: {item.itemPrice}</p>
                                //             <p>Type: {item.itemType}</p>
                                //         </div>
                                //     </div>
                                // </div>
                                <div class="col-lg-3">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={"http://localhost:3001/" + item.itemImage} />
                                        <Card.Body>
                                            <Card.Title>{item.itemName}</Card.Title>
                                            <Card.Text>{item.itemPrice}</Card.Text>
                                            <Card.Text>{item.itemType}</Card.Text>
                                            <Button variant="primary">Add To Cart</Button>
                                        </Card.Body>
                                    </Card>
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