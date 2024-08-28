import React, { useEffect, useState } from 'react';
import './Therapists.css'
import { BASE_URL } from  '../../../helpers/axios'
import axios from 'axios';

export const Therapists: React.FC = (): JSX.Element => {
    const [therapistInfo, setTherapistInfo] = useState<Array<Record<string,string>>|null>(null);

    useEffect(()=> {
       getTherapist()
        window.scrollTo(0, 0)
    }, []);

    const getTherapist = () => {
        axios.get(`${BASE_URL}/api/getInfo`).then((response: { data: React.SetStateAction<Record<string, string>[] | null>; }) => {
            setTherapistInfo(response.data)
        }).catch((err: unknown) => console.log("Cannot Retrieve Photo Data", err));
    }

        const allTherapists = therapistInfo ? therapistInfo.map((element ,i )=> {
            
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
            <>
                <div className="therapist-background">
                    <div style={{paddingTop: '100px'}}>
                         <h1> <div className="header-for-testimonials" style={{ fontSize: '1.5em'}}>Meet Our Team</div></h1>
                         <hr/>
                             <div> {allTherapists} </div>
                     </div>
                </div>
            </>
        );
}