import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import "./Testimonial.css";
import Rehab from './Rehab.jpg';

export default class Testamonials
 extends Component {
    constructor(){
        super()
        this.state ={
            getClientInfo:[]

        
        }

       
    }
    componentDidMount(){
        this.getRehabInfo()
    }

    
    getRehabInfo(){
        axios.get('/api/getTests').then(response => {
            console.log(response)
            this.setState({
                
               getClientInfo: response.data.testimonials
               
            })
        }).catch(err => console.log("Cannot Retrieve Rehab Testimonials", err));
    }

    render() {

        let allInfo = this.state.getClientInfo.map( (e, i)=>{
            console.log(e);
            return(
                <div className="testimonial-info" key= {i}>
                  <div> Service: {e.services} </div>
                  <br/>
                  <div> Experience: {e.experience} </div>
                  <br/>
                  <div> Name: {e.names} </div>
                </div>
            )
        })

        return (
        <div>
            <div className ="testimonials-background">
                <div style={{paddingTop: '100px'}}>
                    <div className="header-for-testimonials">Testimonials</div>
                        {allInfo}
                        <br/>
                        <img className="rehab-photo" src={Rehab}/>
                        <br/>                   
                     <Footer/>
                </div>
            </div>
         </div>
        );
    }
}