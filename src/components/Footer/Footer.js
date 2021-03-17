import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Footer.css';
import Icon from 'react-icons-kit';
import { home2 } from 'react-icons-kit/icomoon/home2';
import {u1F46A} from 'react-icons-kit/noto_emoji_regular/u1F46A';
import {u1F4AD} from 'react-icons-kit/noto_emoji_regular/u1F4AD'


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
        console.log('HIT----------->');
        this.setState({
            showing: !this.state.showing,
            open: true
        })
        // this.toggleOn()
    }

    onCloseModal = () => {
        this.setState({ open: false });
      };

    render() {
        const { open } = this.state;
        return (
            <div>
                 <div>
            <div className = "footer">
              <Link to = "/" className= "logo"></Link>
                <div className="main-conatainer">
                         <ul className="footer-menu">
                            <Wrapper><Link to="/">Home</Link></Wrapper>
                            <Wrapper><Link to="/Contact">Contact</Link></Wrapper>
                            <Wrapper><Link to="/Therapists">Meet Our Team</Link></Wrapper>
                        </ul>
                    <div className= "copyright"> © 2013. Aquatic-N-Writing Rehab. All rights reserved.</div>
                </div>
             </div>
            </div>
            </div>
        );
    }
}