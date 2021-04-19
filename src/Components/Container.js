import React, { Component } from 'react';

import Register from './Register';
import Login from './Login';
import Home from './Home'
import { Route } from 'react-router-dom'
import Items from './Items';
import Cart from './Cart'
import Categories from './Categories';
import AddItem from './AddItem';
import Profile from './Profile';
import UpdateItem from './UpdateItem';
import UpdateFood from './UpdateFood';


class Container extends Component {

    render() {
        return (
            <div class="container">

                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/foods' component={Items} />
                <Route path='/profile' component={Profile} />
                <Route path='/add/item' component={AddItem} />
                <Route path='/update/food/:id' component={UpdateFood} />
                <Route path='/cart' component={Cart} />
                <Route path='/categories' component={Categories} />

            </div>
        )
    }
}

export default Container