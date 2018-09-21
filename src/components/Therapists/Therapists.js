import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';

export default class Therapists extends Component {
    constructor(){
        super()
        this.state= {
        therapistInfo: []
        }
    }

    componentDidMount(){
        this.getTherapist()
    }

    getTherapist(){
        axios.get('/api/getInfo').then(response => {
            console.log(response, "HEY YOU GOT DATA")
            this.setState({
                therapistInfo: response.data.getRehabPhotos
            })
        }).catch(err => console.log("Cannot Retrieve Photo Data", err));
    }

    render() {
        let allTherapists = this.state.therapistInfo.map( e => {
            console.log(e);
            return(
                <div>
                   <h2> {e.photo} </h2>
                   <h2>{e.name}</h2>
                   <h2>{e.information}</h2>
                </div>
            )
        })

        return (
            <div>
                <div style={{paddingTop: '80px'}}>
                     <h1> <div>Meet Our Team </div></h1>
                        {allTherapists} 
                 </div>
                 <Footer/>
            </div>
        );
    }
}