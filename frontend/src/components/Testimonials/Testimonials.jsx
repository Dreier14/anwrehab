import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import "./Testimonial.css";
import Rehab from './Rehab.jpg';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { createApi } from  '../../../helpers/axios'

export default class Testamonials
 extends Component {
    constructor(){
        super()
        this.state ={
            getClientInfo: null
        }
    }

    componentDidMount(){
        this.getRehabInfo()
        window.scrollTo(0, 0)
    }

    getRehabInfo(){
        axios.get(`${import.meta.env.VITE_BASE_URL}/api/getTests`).then(response => {
            this.setState({      
               getClientInfo: response.data
               
            })
        }).catch(err => console.log("Cannot Retrieve Rehab Testimonials", err));
    }

    render() {

        let allInfo = this.state.getClientInfo ? this.state.getClientInfo.map( (e, i)=>{
            return(
                <div className="testimonial-info" key= {i}>
                  <div> {e.services} </div>
                  <br/>
                  <div> {e.experience} </div>
                  <br/>
                  <div> {e.name} </div>
                </div> 
            )
        }) : <img alt="loading" className ="loading" src="https://i.gifer.com/ZKZg.gif"/>
        return (
        <div>
            <Nav/>
            <div className ="testimonials-background">
                <div style={{paddingTop: '100px'}}>
                    <div className="header-for-testimonials">Testimonials</div>
                        {allInfo}
                        <br/>
                       <Link to='/'><img className="rehab-photo" src={Rehab}/></Link>
                        <br/>                   
                     <Footer/>
                </div>
            </div>
         </div>
        );
    }
}



