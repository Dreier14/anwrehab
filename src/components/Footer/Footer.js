import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Footer.css';

const Wrapper = styled.li`
font-size:1.3em`

export default class Footer extends Component {
    constructor(){
        super();
        this.state = {
            showing: false,
            toggle: false,
            menuOpen: false,
            open: false

        }
    }
    showLogin = () => {
        this.setState({
            showing: !this.state.showing,
            open: true
        })
    }

    onCloseModal = () => {
        this.setState({ open: false });
      };

    render() {
        return (
            <div>
                 <div>
            <div className = "footer">
              <Link to = "/" className= "logo"></Link>
                <div className="main-conatainer">
                        <img className="footer-img" src="https://drive.google.com/thumbnail?id=1jpqKCoeAvkeWlo7p09L8Fiwm_h7ELozj" />
                        <ul className="footer-menu">
                            <Wrapper><Link to="/">Home</Link></Wrapper>
                            <Wrapper><Link to="/Contact">Contact</Link></Wrapper>
                            <Wrapper><Link to="/Therapists">Meet Our Team</Link></Wrapper>
                        </ul>
                        <br/>
                    <div className= "copyright"> © 2013. Aquatic-N-Writing Rehab. All rights reserved.</div>
                </div>
             </div>
            </div>
            </div>
        );
    }
}