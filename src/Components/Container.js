import React, { Component } from 'react';
import Categories from '../Components/Categories';
import Items from './Items';
import Slider from '../Components/Slider';
import Register from './Register';
import Login from './Login';
import Home from './Home'
import {Route} from 'react-router-dom'


class Container extends Component{
    render(){
        return(
            <div class="container">

                <div class="row">

                <div class="col-lg-3">
                    <Categories></Categories>
                </div>
                    
                <div class="col-lg-9">

                    <Route path = '/register' component = {Register} />
                    <Route path = '/login' component = {Login} />
                    <Route path = '/home' component = {Home} />

                    <Items></Items>

                    
                </div>

                </div>

           </div>
        )
    }
}

export default Container