import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CardText } from 'reactstrap';
import Chart from '../Chart/Chart';
import DashboardCard from './DashboardCard';
import VirtualList from '../List/List';

class AdminEventsInfo extends PureComponent {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { eventInfo } = this.props;
        let events = [];
        console.log("EVent Info:", eventInfo);
        if(eventInfo) {
            events = [...eventInfo.events, ...eventInfo.events, ...eventInfo.events, ...eventInfo.events, ...eventInfo.events, ...eventInfo.events];
            console.log("Events:", events);
        }
        return (
            <div>
                {/* <div style={{height: '500px'}} background-color> */}
                    {events.length && <VirtualList items={events} />}
                {/* </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    eventInfo: state.admin.dashboardData ? state.admin.dashboardData.eventInfo : {}
});

export default connect(mapStateToProps)(AdminEventsInfo);