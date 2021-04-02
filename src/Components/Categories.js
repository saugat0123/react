import React, { Component } from 'react';

class Categories extends Component{
    render(){
        return(
            <div class="col-lg-3">

                <h1 class="my-4">Categories</h1>
                <div class="list-group">
                <a href="#" class="list-group-item">Vege</a>
                <a href="#" class="list-group-item">Non-Vege</a>
                <a href="#" class="list-group-item">Soup</a>
                <a href="#" class="list-group-item">Drink</a>
                </div>

            </div>
        )
    }
}

export default Categories