import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LottieError from './LottieError'
import './ErrorComponent.css'
import Footer from '../Footer/Footer';


export default class ErrorComponent extends Component {
    render() {
        return (
        <div>
            <div className="background">
              <div className = "Error">
                  <div className = "Text">
                       404 Error 
                   <br/>
                      The Page You Requested is Invalid
                   <br/>
                      
                   <br/>
                      Click on the Link Below to Return to the Homepage
                   <br/>
                      <Link to="/" > <LottieError/></Link>
                  </div>
              </div>
             </div>
            <Footer/>
        </div>  
            
        );
    }
}