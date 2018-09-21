import React, { Component } from 'react';
import axios from 'axios';
import './About.css';
import Footer from '../Footer/Footer';



export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            text: ''
        }
    }
   clearAllFields = () => {
        this.setState({
           text:''
        })
      }
    
    
   handleChange = (e) =>{
      this.setState({
         text: e
        })
      }
   nameHandler = (e) => {
       this.setState({
           name: e
       })
   }

   emailHandler = (e) => {
       this.setState({
           email: e
       })
   }

   messageHandler = (e) => {
       this.setState({
           text: e
       })
   }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, text } = this.state
        axios.post('/api/sendmail', {
            name,
            email,
            text,
        }).then( res => {
            this.setState({
                text:'',
                email:'',
                name:''
             })
            console.log( 'mail', JSON.stringify( res.data ) )
        })
    }

    render() {
        
        return (
        <div>
            <div className= "mailer-form">
                
                <div>
                    <h2 className= 'long'>Send Us an Email!</h2>
                    <hr/>
                <div className='align'>
                    <div className="contact">
                        <form className="mailer" >
                            <div className="form-field">
                            <label htmlFor="name">
                                <div className="label-content">Name:</div>
                                <input className="fields" onChange={ event => this.nameHandler(event.target.value)} type="text" name="name" required value={this.state.name}/>
                            </label>
                            </div>

                            <div className="mailer">
                            <label htmlFor="email">
                                <div className="label-content">Email:</div>
                                <input className="fields" onChange={ event => this.emailHandler(event.target.value)} type="email" name="email" required value={this.state.email}/>
                            </label>
                            </div>

                            <div className="mailer">
                            <label htmlFor="message">
                                <div className="label-content">Message:</div>
                                <textarea background="white" rows="9"  cols="25" className="edit-space" onChange={ event =>this.handleChange(event.target.value)} onChange={ event => this.messageHandler(event.target.value)} name="message" required value={this.state.message}/>
                            </label>
                            </div>
                
                            <button className="inputfile" onClick={ (e) => this.handleSubmit(e) } type="submit">Send</button>
                     
                            <div>
                            { window.location.hash === '#success' &&
                                <div id="success">
                                <p>Your message has been sent!</p>
                                </div>
                            }
                            { window.location.hash === '#error' &&
                                <div id="error">
                                <p>An error occured while submitting the form.</p>
                                </div>
                            }
                            </div>
                        </form>
                    </div>
                    </div> 
                </div>
                <br/>
            </div>
            <Footer/>
        </div>
            );
        }
    }