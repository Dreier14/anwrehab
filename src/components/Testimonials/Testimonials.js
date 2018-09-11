import React, { Component } from 'react';
import axios from 'axios';

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
                <div style={{paddingTop: '80px'}} key= {i}>
                  <div>  {e.names} </div>
                  <div> {e.services} </div>
                  <div> {e.experience} </div>
                </div>
            )
        })

        return (
            <div>
            {allInfo}
             </div>
        );
    }
}