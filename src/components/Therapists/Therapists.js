import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Therapists.css'
import { Card, CardImg } from 'reactstrap';
import Nav from '../Nav/Nav';


export default class Therapists extends Component {
    constructor(){
        super()
        this.state= {
        therapistInfo: null
        }
    }

    componentDidMount() {
        this.getTherapist()
         window.scrollTo(0, 0)
    }


    getTherapist(){
        axios.get('/api/getInfo').then(response => {
            this.setState({
                therapistInfo: response.data.getTherapistData
            })
        }).catch(err => console.log("Cannot Retrieve Photo Data", err));
    }

    render() {
        let allTherapists = this.state.therapistInfo ? this.state.therapistInfo.map((element ,i )=> {
            
            return(
                <div className="therapists-info" key ={i}>
                     { element.photo == null ? <img className="default-img" src={'https://static.thenounproject.com/png/1095867-200.png'}/> : <img src={element.photo} className="img-thumbnail"/> }
                   <h1>{element.name}</h1>
                   <h2>{element.service}</h2>
                   <div className="therapist-text">{element.information}</div>
                   <br/>
                   <div className="break"/>
                   <br/>
                   <br/>
                </div> 
            )
        }) : <img className="loading" src ="https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif"/>

        return (
            <div>
                <Nav/>
                <div className="therapist-background">
                    <div style={{paddingTop: '100px'}}>
                         <h1> <div align="center" className="therapists-head">Meet Our Team </div></h1>
                         <hr/>
                             <div> {allTherapists} </div>
                     </div>
                </div>
              <Footer/>
            </div>
        );
    }
}