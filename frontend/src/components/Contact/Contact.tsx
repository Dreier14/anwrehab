import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export const Contact: React.FC = (): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [text, setText] = useState<string>('');

   const clearAllFields = () => {
        setName('');
        setEmail('');
        setText('');
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        axios.post('/api/sendmail', {
            name,
            email,
            text,
        }).then( res => {
            clearAllFields();
            console.log( 'mail', JSON.stringify( res.data ) )
        })
    }

        window.scrollTo(0, 0)
        return (
        <div>
            <div className="mail-start">
            <div className="center-it">
            <div className= "mailer-form" style={{paddingTop: "105px"}}>
                
                <div>
                    <h2 className= 'long'>Send Us an Email!</h2>
                    <hr/>
                <div className='align'>
                    <div className="contact">
                        <form className="mailer" >
                            <div className="form-field">
                            <label htmlFor="name">
                                <div className="label-content">Name:</div>
                                <input className="fields" onChange={ event => setName(event.target.value)} type="text" name="name" required value={name}/>
                            </label>
                            </div>

                            <div className="mailer">
                            <label htmlFor="email">
                                <div className="label-content">Email:</div>
                                <input className="fields" onChange={ event => setEmail(event.target.value)} type="email" name="email" required value={email}/>
                            </label>
                            </div>

                            <div className="mailer">
                            <label htmlFor="message">
                                <div className="label-content">Message:</div>
                                <textarea rows={9}  cols={25} className="edit-space" onChange={(event) =>setText(event.target.value)} name="message" required value={text}/>
                            </label>
                            </div>
                
                            <button className="inputfile" onClick={ (e) => handleSubmit(e) } type="submit">Send</button>
                     
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
            </div>
            </div>
        </div>
            );
        }
