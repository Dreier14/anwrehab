import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { home2 } from 'react-icons-kit/icomoon/home2';
import {u1F46A} from 'react-icons-kit/noto_emoji_regular/u1F46A';
import {u1F4AD} from 'react-icons-kit/noto_emoji_regular/u1F4AD'

const Wrapper = styled.li`
font-size:1.3em`

export default class Nav extends Component {
    constructor(){
        super()
        this.state = {
           toggle: false 
        }
    }
    
    toggleOn= () => {
       
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }
    render() {

        const hamburger = this.state.toggle ? 'header-menu show' : 'header-menu hide'
        return (
         
            <div>
             {/* <header className='header'>
             <div className= "logo" >
                <Link to = "/" style = {{paddingTop: '10px'}}>
                <img src="//nebula.wsimg.com/2d7d6d1350cb0df455ed27514b4042c8?AccessKeyId=0F9D1A4ACFCC9D22904E&amp;disposition=0&amp;alloworigin=1" height ="70px" width ="70px" />
                </Link>
                <div className = "custom-font">Aquatic-N-Writing Rehab</div>
                </div>
                    
                    <div className= 'burger' onClick={this.toggleOn}>☰</div>
                     <ul className={hamburger}>
                        <ul className= "showing">
                          <Link to = "/" className = "Links" onClick={() => this.setState({toggle: !this.state.toggle})}>Home</Link>
                          <Link to = "/Mission" className="Links" onClick={() => this.setState({toggle: !this.state.toggle})}>Mission</Link>
                          <Link to = "/LearnMore" className="Links" onClick={() => this.setState({toggle: !this.state.toggle})}>Learn More</Link>
                        </ul>
                     </ul> 


             </header> */}
             <header className = "header">
              <Link to = "/" className= "logo">
              <img src="//nebula.wsimg.com/2d7d6d1350cb0df455ed27514b4042c8?AccessKeyId=0F9D1A4ACFCC9D22904E&amp;disposition=0&amp;alloworigin=1" height ="70px" width ="70px" />
              <div className = "rehab"> Aquatic-N-Writing Rehab</div>
              </Link>

                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                         <ul className="menu">
                            <Wrapper><Link to="/">Home <Icon icon={home2} size={25}/></Link></Wrapper>
                            <Wrapper><Link to="/Mission">Mission <Icon icon={u1F46A} size={25}/></Link></Wrapper>
                            <Wrapper><Link to="/LearnMore">Learn More <Icon icon={u1F4AD} size={25}/></Link></Wrapper>
                        </ul>
             </header>
            </div>
        );
    }
}