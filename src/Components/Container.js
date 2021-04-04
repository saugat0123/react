import React, { Component } from 'react';

import Register from './Register';
import Login from './Login';
import Home from './Home'
import { Route } from 'react-router-dom'
import Items from './Items';


class Container extends Component {

    render() {
        return (
            <div>

                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/foods' component={Items} />
                {/* <Route path='/AddItem' component={AddItem} />
                <Route path='/UpdateItem/:id' component={UpdateItem} />
                <Route path='/Cart' component={Cart} /> */}

            </div>
        )
    }
}

export default Container