import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Therapists.css'
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
                therapistInfo: response.data
            })
        }).catch(err => console.log("Cannot Retrieve Photo Data", err));
    }

    render() {
        let allTherapists = this.state.therapistInfo ? this.state.therapistInfo.map((element ,i )=> {
            
            return(
                <div className="therapists-info" key ={i}>
                     { element.photo == null ? <img className="img-thumbnail" src={'https://st2.depositphotos.com/4111759/12123/v/600/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg'}/> : <img src={element.photo} className="img-thumbnail"/> }
                   <h1>{element.name}</h1>
                   <h2>{element.service}</h2>
                   <div className="therapist-text">{element.information}</div>
                   <br/>
                   <div className="break"/>
                   <br/>
                   <br/>
                </div> 
            )
        }) : <img className="loading" src="https://i.gifer.com/ZKZg.gif"/>

        return (
            <div>
                <Nav/>
                <div className="therapist-background">
                    <div style={{paddingTop: '100px'}}>
                         <h1> <div align="center" className="header-for-testimonials" style={{ fontSize: '1.5em'}}>Meet Our Team</div></h1>
                         <hr/>
                             <div> {allTherapists} </div>
                     </div>
                </div>
              <Footer/>
            </div>
        );
    }
}