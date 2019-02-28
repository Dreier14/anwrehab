import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import './LearnMore.css';
import { Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Nav from '../Nav/Nav';


export default class extends Component {
    render() {
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
                                <Col xs="auto" className="teach-text">Check us out on Facebook!</Col>
                                <br/>
                                <Button className="button-stuff" href='https://www.facebook.com/aquaticnwritingrehab/'>Go to our Facebook!</Button>
                            </div>

                        {/* <a className="facebook-button" ></a> */}
                    </div>
                    <br/>
                  </div>
                <Footer/>
            </div>   
        );   
    }
}

