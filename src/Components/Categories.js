import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class Categories extends Component {

    submitUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', this.state)
            .then((response) => {
                console.log(response)
                window.location.assign('/login')
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div className="mb-2 offset-sm-3">
                        <Button variant="primary" size="lg">
                            Vege
                        </Button>
                        <Button variant="secondary" size="lg">
                           Non-vege
                        </Button>
                        <Button variant="secondary" size="lg">
                            Drink
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Categories