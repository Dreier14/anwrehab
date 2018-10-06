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
        let allTherapists = this.state.therapistInfo.map(element => {
            console.log(element);
            return(
                <div key ={element.id}>
                     <img src= {element.photo}/>
                   <h2>{element.name}</h2>
                   <h2>{element.service}</h2>
                   <h2>{element.information}</h2>
                </div>
            )
        })

        return (
            <div>
                <div style={{paddingTop: '80px'}}>
                     <h1> <div>Meet Our Team </div></h1>
                      <div> {allTherapists} </div> 
                 </div>
                 <Footer/>
            </div>
        );
    }
}