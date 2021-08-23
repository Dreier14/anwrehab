import React, { PureComponent } from 'react';
import EventSchedular from './EventSchedular/EventSchedular';
import './Dashboard.css';
import 'bootstrap';


export default class AnwRehabDashboard extends PureComponent {
    render() {
        window.scrollTo(0, 0)
        return (
            <div>
                <div className="dashboard-background">
                    <EventSchedular name="Ali" />
                </div>
            </div>   
        );   
    }
}

