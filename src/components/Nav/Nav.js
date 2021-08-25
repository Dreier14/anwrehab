import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { home2 } from 'react-icons-kit/icomoon/home2';
import { enter } from 'react-icons-kit/icomoon/enter';
import { meter } from 'react-icons-kit/icomoon/meter';
import {u1F46A} from 'react-icons-kit/noto_emoji_regular/u1F46A';
import {u1F4AD} from 'react-icons-kit/noto_emoji_regular/u1F4AD';
import Logo from './logo.png';
import Login from '../Login/Login';

const Wrapper = styled.li`
font-size:1.3em`

class Nav extends Component {
    constructor(){
        super()
        this.state = {
           toggle: false,
           openLoginModal: false
        }
    }
    
    toggleOn= () => {
       
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    toggleLoginModal = () => {
        this.setState(prevState => {
            return {
                openLoginModal: !prevState.openLoginModal
            }
        });
    }

    closeLoginModal = () => {
        this.setState({openLoginModal: false});
    }

    render() {

        const hamburger = this.state.toggle ? 'header-menu show' : 'header-menu hide';
        const { currentUser } = this.props;
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
              <img src={Logo} height ="70px" width ="70px" />
              <div className = "rehab"> Aquatic-N-Writing Rehab</div>
              </Link>

                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <Wrapper><Link to="/">Home <Icon icon={home2} size={25}/></Link></Wrapper>
                    <Wrapper><Link to="/Testimonials">Testimonials<Icon icon={u1F46A} size={25}/></Link></Wrapper>
                    <Wrapper><Link to="/LearnMore">Learn More <Icon icon={u1F4AD} size={25}/></Link></Wrapper>
                    {currentUser.id && <Wrapper><Link to="/Dashboard">Dashboard<Icon icon={meter} size={25}/></Link></Wrapper>}
                    <Wrapper><button className="btn" onClick={this.toggleLoginModal}>Login <Icon icon={enter} size={25}/></button></Wrapper>
                </ul>
             </header>
             <Login 
                isModalOpen={this.state.openLoginModal}
                toggleModal={this.toggleLoginModal}
                closeModal={this.closeLoginModal}
             />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Nav);