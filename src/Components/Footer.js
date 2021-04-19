import { Component } from "react";
// import pict from "../pict/logo.PNG"


class Footer extends Component{
    render(){
        return(
            <footer class="footer-distributed">

                <div class="footer-left">
                    {/* <img class="footer-img" src="D:\Study\5th Sem\WebAPI\RB_React\rb_frontend\src\pict\logo.PNG" /> */}
                    <h3><span>RoyalBhatti</span></h3>

                    <p class="footer-links">
                        <a href="/">Home</a>
                        |
                        <a href="/foods">Foods</a>
                        |
                        <a href="/about">About</a>
                    </p>

                    <p class="footer-company-name">© 2021 Royal Bhatti</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Gyaneswor,
                            Kathmandu </span>
                            </p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+977 9860297123</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+977 9841623588</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p>royalbhatti11@gmail.com</p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        We offer you the best foods and a chill place. </p>
                    <div class="footer-icons">
                        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
                        <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css" />
                        <a href="#"><i class="fa fa-facebook"></i></a> 
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
		    </footer>
            
        )
    }
}

export default Footer;