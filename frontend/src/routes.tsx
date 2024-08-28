import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from './components/Home/Home'
import {Nav} from './components/Nav/Nav';
// import {Contact} from './components/Contact/Contact';
import {LearnMore} from './components/LearnMore/LearnMore';
import {Therapists} from './components/Therapists/Therapists';
import {ErrorComponent} from './components/ErrorComponent/ErrorComponent';
import {Testimonials} from './components/Testimonials/Testimonials';
import {Shop} from './components/Shop/Shop';
import {Footer} from './components/Footer/Footer';

export default (
    <>
        <Nav/>
        <br/>
        <>
            <Routes>
                <Route path='/' element={ <Home /> }/> 
                {/* <Route path ='/Contact' element={ <Contact /> }/> */}
                <Route path ='/LearnMore' element={ <LearnMore/>}/>
                <Route path ='/Therapists' element={ <Therapists/> }/>
                <Route path ='/Testimonials' element={ <Testimonials/> }/>
                <Route path ='/Shop' element={ <Shop/> }/>
                <Route element={ <ErrorComponent/>}/>
                {/* <Route path='*' element={<Error />} /> */}
            </Routes>
        </>
        <Footer />
    </>
);