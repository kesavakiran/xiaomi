import react, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form,FormControl,Button,Carousel,Card,CardDeck} from 'react-bootstrap'
import './App.css'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";



class Redmii extends Component{

render(){
    return(
        <div>
            <div className="marque">
                <div><marquee>Due to Covid-19, the ongoing health and containment emergency measures may cause servise delays at logistic couriers and Xiaomi authorized service centers untill further notice. Thank You for your understanding and support.*</marquee></div>
            </div>
            <div id="nav">
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home" className="i">INTERNATIONAL</Nav.Link>
                <Nav.Link href="#features" className="c">MI COMMUNITY</Nav.Link>
                <Nav.Link href="#pricing" className="m">MIUI</Nav.Link>
                <Nav.Link href="#pricing" className="x">XIAOMI STUDIOS</Nav.Link>
                <Link to="/siff"><Nav.Link href="#pricing" className="si">SIGN IN</Nav.Link></Link>
                <Link to="/siffu"><Nav.Link href="#pricing" className="sp">SIGN UP</Nav.Link></Link>
                </Nav>
                </Navbar>
            </div>
            <div>
                <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="navv">
                <img src="log.png" className="logo"/>
                <Nav.Link href="#home" className="miphone">Mi Phones</Nav.Link>
                <Nav.Link href="#features" className="poco">Poco Phones</Nav.Link>
                <Nav.Link href="#pricing" className="red">redmi Phones</Nav.Link>
                <Nav.Link href="#pricing" className="mitv">Mi TV</Nav.Link>
                <Nav.Link href="#pricing" className="smart">Smart Devices</Nav.Link>
                <Nav.Link href="#pricing" className="all">All Products</Nav.Link>
                <Nav.Link href="#pricing" className="product">Product Authentication</Nav.Link>
                </Nav>
                </Navbar>

            </div>
            <div id="carousel">
                <Carousel>
                <Carousel.Item interval={100}>
                <img
                className="miglobal"
                src="miglobal.png"
                alt="First slide"
                />
                <Carousel.Caption>
                 {/* <h3><a href="Learn more"></a></h3> */}
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="minote7"
                src="minote7.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                 {/* <h3>Second slide label</h3> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                 className="pro"
                src="pro.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div id="cardbody">
                <CardDeck>
                <Card>
                <Card.Img variant="top" src="mik.jpg" />
                <Card.Body>
                </Card.Body>
                
                </Card>
                <Card>
                <Card.Img variant="top" src="mik1.jpg" />
                <Card.Body>
                 </Card.Body>
                
                </Card>
                <Card>
                <Card.Img variant="top" src="mik2.jpg" />
                <Card.Body>
                </Card.Body>
                </Card>
                </CardDeck>
            </div>
            <div id="star">
                <hr className="hr1"></hr>
                <p> STAR PRODUCTS</p>
                <hr className="hr2"></hr>
            </div>
            <div className="cont">
                <div>
                    <img src=" TWS.jpg" className="wi"></img>
                    
                </div>
                <div>
                <img src="pc.jpg" className="smartpur"></img>

                <img src="pur.jpg" className="smartp"></img>
                <img src="led.jpg" className="led"></img>
                </div>
            </div>
            <div id="vid">
                <hr className="hr3"></hr>
                <p> VIDEOS</p>
                <hr className="hr4"></hr>
            </div>
            <div id="cardvid">
                <CardDeck>
                <Card className="design">
                <video controls>
                <source src="_Design(2K).webm" type="video/webm"/>

                </video>
                
                </Card>
                <Card className="desig">
                <video controls>
                <source src="desig.mp4" type="video/mp4"/>

                </video>
                
                </Card>
                <Card  className="desi">
                <video controls>
                <source src="desi.mp4" type="video/mp4"/>

                </video>
                </Card>
                </CardDeck>
            </div>
            <div id="touch">
                <div className="let">
                    <h4>LET'S STAY IN TOUCH</h4>
                    <h6>Get Updates On Sales Specials and more </h6>
                </div>
                <div>
                    <input type="search" placeholder="Enter Email Address   >" className="sea"/>
                </div>
                <div className="fol">
                    <h4>FOLLOW MI</h4>
                    <h6 className="want">We want to hear from you! </h6>
                </div>
                <img src="f.png" className="ges"></img>
                <img src="y.png" className="ges"></img>
                <img src="i.png" className="ges"></img>
                <img src="t.png" className="ges"></img>
            </div>
            <div id="bl">
            <div id="learn">
                <div id="c1">
                    <h4>LEARN MORE</h4>
                    <h6>Mi 10T pro</h6>
                    <h6>Redmi Note 9T</h6>
                    <h6>Mi 10T Lite</h6>
                </div>
                <div id="c2">
                    <h4>SUPPORT</h4>
                    <h6>Contact Us</h6>
                    <h6>Warranty</h6>
                    <h6>User Guide</h6>
                    <h6>EU Declaration of</h6>
                    <h6>Conformity</h6>
                    <h6>Scooter Safety Notice</h6>
                    <h6>Android Enterprise</h6>
                    <h6>Recommended</h6>
                </div>
                <div id="c3">
                    <h4>ABOUT US</h4>
                    <h6>Xiaomi</h6>
                    <h6>Press & Media</h6>
                    <h6>User Agreement</h6>
                    <h6>Privacy Policy</h6>
                    <h6>Xiaomi Blog</h6>
                    <h6>Investor Relations</h6>
                    <h6>Integrity & Compliance</h6>
                </div>
                <div id="c4">
                    <h4>FOLLOW MI</h4>
                    <div id="i1">
                        <img id="lo" src="f1.png"></img>
                        <h6>Facebook</h6>
                    </div>
                    <div id="i2">
                        <img id="lo" src="y3.png"></img>
                        <h6>Youtube</h6>
                    </div>
                    <div id="i3">
                        <img id="lo" src="i1.jpg"></img>
                        <h6>Instagram</h6>
                    </div>
                    <div id="i4">
                        <img id="lo" src="t1.png"></img>
                        <h6>Twitter</h6>
                    </div>
                    <h6>More Regions</h6>
                </div>
            </div>
                <hr id="hr"></hr>
                <p className="ft1">Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</p>

            </div>
            
            
        </div>
    );
}

    

}
export default Redmii;

