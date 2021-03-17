import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import LearnMore from './components/LearnMore/LearnMore';
import Therapists from './components/Therapists/Therapists';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import Testimonials from './components/Testimonials/Testimonials';


export default
         (
        <Switch>
           <Route exact path='/' component={ Home }/> 
           <Route path ='/Contact' component={ Contact }/>
           <Route path ='/LearnMore' component={ LearnMore }/>
           <Route path ='/Therapists' component={ Therapists }/>
           <Route path ='/Testimonials' component={ Testimonials }/>
           <Route component={ ErrorComponent}/>
        </Switch>
        );
    
