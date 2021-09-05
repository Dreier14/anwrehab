import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer/Footer';
// import EventSchedular from '../Dashboard/EventSchedular/EventSchedular';
import Calendar from '../Calendar/Calendar';
import Aqua from "./Aqua.jpg";
import Therapists from "./Therapists.jpg";
import Writing from "./Writing.jpg";
import Testimonials from "./Testimonials.jpg"
import Learn from "./Learn.jpg"
import logo from "./logo.png";
import Nav from '../Nav/Nav';
import { Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Chart from '../Chart/Chart';
import $ from 'jquery';
// import '../../calendar';

// import Login from '../Login/Login';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        window.scrollTo(0, 0)
        return (
        <React.Fragment>
            <Row sm="3">

                <Chart
                    title='Test'
                    type='pie'
                    dataSet={[
                        {label: "Jan. '13'", quantity: 53},
                        {label: "Feb. '13'", quantity: 165},
                        {label: "Mar. '13'", quantity: 269},
                        {label: "Apr. '13'", quantity: 344},
                        {label: "May  '13'", quantity: 376},
                        {label: "Jun. '13'", quantity: 410},
                        {label: "Jul. '13'", quantity: 421},
                        {label: "Aug. '13'", quantity: 405},
                        {label: "Sep. '13'", quantity: 376},
                        {label: "Oct. '13'", quantity: 359},
                        {label: "Nov. '13'", quantity: 392},
                        {label: "Dec. '13'", quantity: 433},
                    ]}
                    height={300}
                    width={300}
                />
                <Chart
                    title='Test 2'
                    type='bar'
                    dataSet={[
                        {label: "Jan. '13'", value: 53},
                        {label: "Feb. '13'", value: 165},
                        {label: "Mar. '13'", value: 269},
                        {label: "Apr. '13'", value: 344},
                        {label: "May  '13'", value: 376},
                        {label: "Jun. '13'", value: 410},
                        {label: "Jul. '13'", value: 421},
                        {label: "Aug. '13'", value: 405},
                        {label: "Sep. '13'", value: 376},
                        {label: "Oct. '13'", value: 359},
                        {label: "Nov. '13'", value: 392},
                        {label: "Dec. '13'", value: 433},
                    ]}
                    height={300}
                    width={300}
                />
                <Chart
                    title='Test 3'
                    type='bar'
                    dataSet={[
                        {label: "Jan. '13'", value: 53},
                        {label: "Feb. '13'", value: 165},
                        {label: "Mar. '13'", value: 269},
                        {label: "Apr. '13'", value: 344},
                        {label: "May  '13'", value: 376},
                        {label: "Jun. '13'", value: 410},
                        {label: "Jul. '13'", value: 421},
                        {label: "Aug. '13'", value: 405},
                        {label: "Sep. '13'", value: 376},
                        {label: "Oct. '13'", value: 359},
                        {label: "Nov. '13'", value: 392},
                        {label: "Dec. '13'", value: 433},
                    ]}
                    height={300}
                    width={300}
                />
            </Row>
            <div className ="home-background">
            <br/>
            <div  className="master" style={{paddingTop:"95px"}}>
            <Calendar />
           <div class="lead-container">
                <img className="child" src="//nebula.wsimg.com/99c0f18d164056a37b38857e04c11921?AccessKeyId=0F9D1A4ACFCC9D22904E&amp;disposition=0&amp;alloworigin=1" width="100%"/>
                    <div class="text-block"> 
                        <p className="unleashed">Unleash Your Child's Potential</p>
                    </div>
                </div>
                <br/>
                <Card >
                    <CardImg  top width="50%" src={Learn}/>
                     <CardBody className="chalkboard" >
                        <img className="crayon" src={logo}/>
                        <CardTitle style={{color: "color: rgba(0, 55, 255, 0.51)", paddingTop:"5%", fontSize:"2.4em" }}>Child-Centered Therapy </CardTitle>
                            <CardText style={{fontSize: "127%", padding:"5%"}}>We believe that every child is unique and will grow at his or her own pace. Our highly-qualified providers spend time nurturing each child’s strengths and encouraging them to reach new heights.</CardText>
                        <Button><Link to="/LearnMore">Learn More</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Aqua} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background:"#add8e6a6"}} >
                        <CardTitle>Aquatics</CardTitle>
                            <CardText>Aquatic Therapy could be just what you've been looking for. Our team specializes in this unique therapeutic technique. We’ve seen major breakthroughs when we get kids in the water and they usually have fun doing it! </CardText>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Writing} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background:"rgba(255, 200, 0, 0.6)"}}>
                        <CardTitle>Handwriting</CardTitle>
                            <CardText>We offer a full range of handwriting services that foster your child’s fine motor growth.​</CardText>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Therapists} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background:"rgba(17, 187, 22, 0.51)"}}>
                        <CardTitle>Therapists</CardTitle>
                                <CardText>Our staff members are extremely good at what they do. Click to check out the ANW Rehab team.</CardText>
                            <Button><Link to="/Therapists">Meet Our Team</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="50%" src={Testimonials} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background: "rgba(255, 248, 25, 0.81)"}}>
                        <CardTitle>Testimonials</CardTitle>
                                <CardText>Click below to read to read some Testimonials from our families.</CardText>
                            <Button><Link to="/Testimonials">Testimonials</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
        );
    }
}