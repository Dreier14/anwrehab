import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './LearnMore.css';
import { Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Nav from '../Nav/Nav';
import 'bootstrap';

export default class extends Component {
    render() {
        window.scrollTo(0, 0)
        return (
            <div>
                <Nav/>
                <div className="learn-background">
                
                    <div style={{paddingTop:"100px"}}>
                    
                        <div className="header-for-testimonials">Learn More</div>
                        <br/>
                        <div className="master-learn">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/8rWgTm-CRO4" frameborder="0" allow="autoplay; encrypted-media" controls webkitallowfullscreen></iframe>
                        </div>
                            <br/>
                            <br/>
                               <Col xs="auto" className="teach-text">Teaching Assistive <br/>Techonology</Col>
                            <br/>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.youtube.com/embed/1PnkZ5BUsP8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen controls webkitallowfullscreen></iframe>
                            </div>
                            <br/>
                                <Col xs="auto" className="teach-text">Check us out on Facebook and Instagram!</Col>
                                <br/>
                                <div className='button-flex'>
                                <Button className="button-stuff" href='https://www.facebook.com/aquaticnwritingrehab/'>Go to our Facebook!</Button>
                                <br/>
                                <Button className="button-stuff" href='https://www.instagram.com/aquaticnwritingrehab/?igshid=YmMyMTA2M2Y%3D'>Go to our Instagram!</Button>
                                <br/>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="magazine-pic">
                                <img class="img-fluid" src='https://drive.google.com/thumbnail?id=1YUyyysqWZoNOHVEMLJkRb2gKXxpNh-Gv'style={{margin:"auto"}}/>
                                <br/>
                                <br/>
                                <img class="img-fluid" src='https://drive.google.com/thumbnail?id=1Q-FVAKNfZXdo7LnRv9t3fxWbEykMfbBY'style={{margin:"auto"}}/>
                                <br/>
                                <br/>
                                <Col className="mag" xs="auto">Check out our article from <br/> Uptown and So Scottsdale Magazine</Col>
                                <br/>
                                <Button className="button-stuff" href='https://issuu.com/richmanmediagroup/docs/ut-0620?fr=sMTg4MjQ2MjMzNw'>Click here for the full edition!</Button>
                            </div>
                    </div>
                    <br/>
                  </div>
                <Footer/>
            </div>   
        );   
    }
}

