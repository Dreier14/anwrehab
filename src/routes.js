import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import Mission from './components/Mission/Mission';
import LearnMore from './components/LearnMore/LearnMore';
import ReadMore from './components/ReadMore/ReadMore';
import Therapists from './components/Therapists/Therapists';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import Testimonials from './components/Testimonials/Testimonials';
// import Login from './components/Login/Login';

export default
         (
        <Switch>
           <Route exact path='/' component={ Home }/> 
           <Route path ='/Contact' component={ Contact }/>
           <Route path ='/Mission' component={ Mission }/>
           <Route path ='/LearnMore' component={ LearnMore }/>
           <Route path ='/ReadMore' component={ ReadMore }/>
           <Route path ='/Therapists' component={ Therapists }/>
           <Route path ='/Testimonials' component={ Testimonials }/>
           {/* <Route path = '/Login' component={ Login }/> */}
           <Route component={ ErrorComponent}/>
        </Switch>
        );
    
