import React, { Component } from 'react';
import './Home.css';
import Login from '../Login/Login';

export default class  extends Component {
    render() {
        return (
            <div className ="home-background">
                <div>
                    <Login/>
                </div>
            </div>
        );
    }
}