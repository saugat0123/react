import React, { Component } from 'react';
import Categories from './Categories';
import Items from './Items';
import Slider from './Slider';
import Register from './Register';
import Login from './Login';
import Home from './Home'
import {Route} from 'react-router-dom'


class Container extends Component{
    render(){
        return(
            <div class="container">

                <div class="row">
                    <Categories></Categories>
                <div class="col-lg-9">
                
                    <Route path = '/register' component = {Register} />
                    <Route path = '/login' component = {Login} />
                    <Route path = '/home' component = {Home} />

                    <Slider></Slider>
                    <Items></Items>
                </div>

                </div>

            </div>
        )
    }
}

export default Container