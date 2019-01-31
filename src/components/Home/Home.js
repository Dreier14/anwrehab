import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer/Footer';
import Aqua from "./Aqua.jpg";
import Therapists from "./Therapists.jpg";
import Writing from "./Writing.jpg";
import Testimonials from "./Testimonials.jpg"
import Learn from "./Learn.jpg"
import logo from "./logo.png";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

// import Login from '../Login/Login';

export default class  extends Component {
    render() {
        return (
        <div>
            <div className ="home-background">
            <br/>
            <div  className="master" style={{paddingTop:"95px"}}>
           <div class="lead-container">
                <img className="child" src="//nebula.wsimg.com/99c0f18d164056a37b38857e04c11921?AccessKeyId=0F9D1A4ACFCC9D22904E&amp;disposition=0&amp;alloworigin=1" width="100%"/>
                    <div class="text-block"> 
                        <p>Unleash Your Child's Potential</p>
                    </div>
                </div>
                <br/>
                <Card style={{borderStyle: "none"}}>
                    <CardImg  top width="50%" src={Learn}/>
                     <CardBody className="chalkboard" >
                        <img className="crayon" src={logo}/>
                        <CardTitle style={{color: "#c0fa95", paddingTop:"5%" }}>Child-Centered Therapy </CardTitle>
                            <CardText style={{background:"hsla(0,0%,100%,.40)",color:"purple", borderRadius:"10px", padding:"5%"}}>We believe that every child is unique and will grow at his or her own pace. Our highly-qualified providers spend time nurturing each child’s strengths and encouraging them to reach new heights.</CardText>
                        <Button><Link to="/LearnMore">Learn More</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Aqua} alt="Card image cap" />
                     <CardBody style={{background:"lightblue"}} >
                        <CardTitle>Aquatics</CardTitle>
                            <CardText>Aquatic Therapy could be just what you've been looking for. Our team specializes in this unique therapeutic technique. We’ve seen major breakthroughs when we get kids in the water and they usually have fun doing it! </CardText>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Writing} alt="Card image cap" />
                     <CardBody style={{background:"rgba(255, 166, 0, 0.795)"}}>
                        <CardTitle>Handwriting</CardTitle>
                            <CardText>We offer a full range of handwriting services that foster your child’s fine motor growth.​</CardText>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Therapists} alt="Card image cap" />
                     <CardBody style={{background:"#1db925d7"}}>
                        <CardTitle>Therapists</CardTitle>
                                <CardText>Our staff members are extremely good at what they do. Click to check out the ANW Rehab team.</CardText>
                            <Button><Link to="/Therapists">Meet Our Staff</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Testimonials} alt="Card image cap" />
                     <CardBody style={{background: "yellow"}}>
                        <CardTitle>Testimonials</CardTitle>
                                <CardText>Click below to read to read some Testimonials from our families.</CardText>
                            <Button><Link to="/Testimonials">Testimonials</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}