import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import './LearnMore.css'

export default class extends Component {
    render() {
        return (
            <div>
                <div className="learn-background">
                    <div style={{paddingTop:"100px"}}>
                        <div className="header-for-testimonials">Learn More</div>
                            <iframe className="video" src="https://www.youtube.com/embed/8rWgTm-CRO4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <div className="facebook-text">Check us Out on Facebook!</div>
                        <a className="facebook-button" href='https://www.facebook.com/aquaticnwritingrehab/'>Go to our Facebook!</a>
                    </div>
                    <div>
                        <div className="map">Info</div>
                    </div> 
                </div>
                <Footer/>
             </div>   
        );   
    }
}