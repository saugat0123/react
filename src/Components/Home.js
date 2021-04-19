import axios from 'axios';
import { Component } from 'react';

class Home extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/item/all', this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    data: response.data                   
                })
                
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div class="container">
                <header class="jumbotron my-4">
                    <h1 class="display-3">A Warm Welcome!</h1>
                    <p class="lead">We Serve Quality'and hygienic food, great hospitality with friendly and cozy environment with varieties of delicious foods and drinks.</p>
                    <a href="#" class="btn btn-primary btn-lg">Explore!</a>
                </header>

                <div class="row">
                    {
                       this.state.data.map((item) => {
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
                                            <a href="#" class="btn btn-primary">Add To Cart</a>
                                            
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

export default Home;