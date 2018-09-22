import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer/Footer';
import Aqua from "./Aqua.jpg";
import Therapists from "./Therapists.jpg";
import Writing from "./Writing.jpg";
import Testimonials from "./Testimonials.jpg"
import Learn from "./Learn.jpg"

// import Login from '../Login/Login';

export default class  extends Component {
    render() {
        return (
            <div className ="home-background">
                <div style={{paddingTop:'95px'}}>
                    <div className="master-container">
                        <div className="top-container">
                            <img className="background-image" src="//nebula.wsimg.com/99c0f18d164056a37b38857e04c11921?AccessKeyId=0F9D1A4ACFCC9D22904E&amp;disposition=0&amp;alloworigin=1"/>
                            <div className="parent-text">Unleash Your Child's Potential</div>
                        </div>
                        
                        <div className="container"> 
                            <img className="background-image" src="//nebula.wsimg.com/75fe03dfec8707844b608aeb1fbd614f?AccessKeyId=0F9D1A4ACFCC9D22904E&amp;disposition=0&amp;alloworigin=1"/>
                            <div className ="child-text"> Child-Centered Therapy </div>
                            <div className="therapy-text">We believe that every child is unique and will grow at his or her own pace. Our services spend time nurturing children’s strengths and encouraging them to reach new heights.</div>
                            <img className="learn-picture" src={Learn}/>
                            <button className="button"><Link to="/LearnMore">Learn More</Link></button> 
                        </div>
                        <div className="blue-box">
                            <div className="snow-text">Aquatics</div>
                            <div className="blue-text">We specialize in Aquatic Therapy techniques.</div>
                            <img className="aquatics" src={ Aqua }/>
                        </div>
                        <br/>
                        <div className="orange-box">
                            <div className="snow-text">Handwriting</div>
                            <div className="orange-text">We offer a full range of handwriting services that foster your child’s <br/> fine motor growth.​ </div>
                            <img className="writing" src={ Writing }/>
                        </div>
                        <br/>
                        <div className="green-box">
                            <div className="snow-text">Therapists</div>
                            <div className="green-text">Meet our staff. We are here to answer your questions and meet your therapy needs.</div> 
                            <img className="therapist" src={ Therapists }/>
                            <button className="button1"><Link to="/Therapists">Meet Our Staff</Link></button> 
                        </div>
                        <br/>
                        <div className="yellow-box">
                            <div className="snow-text">Testimonials</div>
                            <div className="yellow-text">Click below to read to read some Testimonials from our families.</div> 
                            <img className="testimonials" src={ Testimonials }/>
                            <button className="button2"><Link to="/Testimonials">Testimonials</Link></button> 
                        </div>                       
                    </div>
                </div>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
}