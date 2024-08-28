import React, { useEffect, useState } from 'react';
import "./Testimonial.css";
import Rehab from './Rehab.jpg';
import { Link } from 'react-router-dom';
import { createApi } from  '../../../helpers/axios'

export const Testimonials: React.FC = (): JSX.Element => {
    const [clientInfo, setTestimonialInfo] = useState<Array<Record<string,string>>|null>(null);

    useEffect(()=> {
        getTestimonials()
        window.scrollTo(0, 0)
    }, []);

    const getTestimonials = () => {
        createApi.get(`/api/getTests`).then(response => {
            setTestimonialInfo(response.data)
        }).catch(err => console.log("Cannot Retrieve Rehab Testimonials", err));
    }

    const allInfo = clientInfo ? clientInfo.map((e, i)=>{
        return(
            <div className="testimonial-info" key= {i}>
                <div> {e.services} </div>
                <br/>
                <div> {e.experience} </div>
                <br/>
                <div> {e.name} </div>
            </div> 
        )
    }) : <img alt="loading" className ="loading" src="https://i.gifer.com/ZKZg.gif"/>
    return (
        <>
            <div className ="testimonials-background">
                <div style={{paddingTop: '100px'}}>
                    <div className="header-for-testimonials">Testimonials</div>
                        {allInfo}
                        <br/>
                        <Link to='/'><img className="rehab-photo" src={Rehab}/></Link>
                        <br/>                   
                </div>
            </div>
        </>
    );
}


