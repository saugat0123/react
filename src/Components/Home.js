import { Component } from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import Categories from "./Categories";
// import Container from "./Container";
import Items from './Items';
import Slider from './Slider';

class Home extends Component{
    render(){
        return (
            <div>
                <Slider></Slider>
                {/* <Categories></Categories> */}
                <Items></Items>
            </div>
        )
    }
}

export default Home;